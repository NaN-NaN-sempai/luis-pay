<script>
    import Year from "./Year.svelte";
    import Content from "./content/Content.svelte";
    import Flyout from "./flyout/Flyout.svelte";
    
    import translations from "$trad"; 
	import ContentPanel from "../routes/_components/ContentPanel.svelte";
	import Qrteste from "../routes/_components/qrteste.svelte";
	import ContentArea from "../routes/_components/ContentArea.svelte";
	import ContentTitle from "../routes/_components/ContentTitle.svelte";
	import GeneralField from "../routes/_components/GeneralField.svelte";
	import ContentQr from "../routes/_components/ContentQR.svelte";
	import ContentText from "../routes/_components/ContentText.svelte";
	import QrText from "../routes/_components/QrText.svelte";
	import ContentButton from "../routes/_components/ContentButton.svelte";
	import PixSvg from "../routes/_components/svg/PIX_SVG.svelte";
	import ContentBanner from "../routes/_components/ContentBanner.svelte";
	import ContentTextWIthTitle from "../routes/_components/ContentTextWIthTitle.svelte";
	import IconField from "../routes/_components/IconField.svelte";
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import DarkModeSwitch from "./DarkModeSwitch.svelte";
	import BrazilFlag from "../routes/_components/svg/brazilFlag.svelte";
	import ModalButton from "../routes/_components/modal/ModalButton.svelte";

    import gotoBankList from "$lib/gotoBankList";

    let texts; 
    translations.subscribe(value => {
        texts = value;
    });


    export let data;
    const {slugs, paymentData, search} = data;
    
	$: method = slugs.method;    

    let list =  Object.entries(paymentData).map(e => {
        let item = e[1];
        item.key = e[0];

        return item;
    });

    let pixQR = "";
    let pixCode = "carregando...";
	$: selected = method && paymentData ? paymentData[method] : null;
    $: if(selected != undefined) {
        pixQR = "";
        pixCode = "carregando...";
        if(selected.type == "pix" && typeof window !== "undefined")
            generatePix();
    }

    const generatePix = () => {
        const obj = {
            ...selected.pixData,
            value: isNaN(slugs.value)? null: slugs.value,
            message: slugs.message,
        }

        fetch("/api/genPix", {
            method: "POST",
            body: JSON.stringify(obj)
        }).then(res => res.json()).then(ret => {
            if(ret.error) {
                alert("Erro ao gerar QR Code");
                pixQR = "";
            } else {
                pixQR = ret.pixSvg;
                pixCode = ret.pixPayload;        
            }
        });
    }


    const gotoObj = (obj, getPath = false, appendSearch = "", appendHash  = "") => {
        let path = `/${paymentData[obj.method] !== undefined ? obj.method : "_"}`; 
        if (obj.value) path += `/${obj.value}`;

        let urlParams = "";
        
        if (typeof window !== 'undefined') {
            let search = window.location.search || '';
            let hash = window.location.hash || '';

            urlParams += (search || appendSearch) + (hash || appendHash);
        }
        path += urlParams;

        if (getPath) return path;
        
        slugs.method = obj.method;
        slugs.value = obj.value;
        slugs.message = obj.message;

        goto(path);
    };

    const copyCode = () => {
        if(navigator.clipboard){
            navigator.clipboard.writeText(pixQR);
        } else {
            alert("Seu navegador não suporta copiar a função de copiar.");
        }
    }

    const share = (shareText) => {
        if(navigator.share) {
            navigator.share({
                title: `Pay - Luís Henrique | Type: ${selected.type} | Value: ${slugs.value}`,
                text: `Type: ${selected.type}\n${slugs.method}\nValue: ${slugs.value}\nMessage: ${slugs.message}`,
                url: shareText + location.search,
            });

        } else {
            if(navigator.clipboard){
                navigator.clipboard.writeText(shareText + location.search);
            } else {
                alert("Seu navegador não suporta copiar a função de copiar.");
            }
        }
    }

    const sharePayment = () => {
        const path = `${slugs.method || ""}${ slugs.value ? "/" + slugs.value : ""}${ slugs.message ? "/" + encodeURIComponent(slugs.message) : ""}`;
        
        const str = `${location.origin}/enc/${btoa(path)}`;

        share(str);
    }

    onMount(async ()=>{
        document.querySelectorAll(".doHash").forEach(e=>e.href=gotoObj({...slugs, method: e.dataset.key}, true));
    });

    let dmSwitch;
</script>

<div class="wrapper">
    <div class="flyout">
        <Flyout />
    </div>
    <div class="right">
        <div class="contentHeader">
            <div class="year">
                <Year> <span class="hidden">PAY - </span> {new Date().getFullYear()} </Year>
            </div>
            <h1 class="title">Luís Henrique Space</h1>
        </div>
        <div class="content">
            <ContentPanel>
            {#if selected != undefined}
                {#if selected.type == "pix"}
                    
                    <div class="contentArea">
                        <ContentArea>
                            <ContentTitle>código qr</ContentTitle>
                            <GeneralField>
                                <ContentQr bind:code={pixQR} />
                            </GeneralField>
                            <div class="inlineField">
                                <GeneralField>
                                    <ContentText> 
                                        <QrText selection="all"> {pixCode} </QrText>
                                    </ContentText>
                                </GeneralField>

                                <ContentButton action={copyCode}>
                                    Copiar ©
                                </ContentButton>
                            </div>
                            <div class="inlineField">
                                <ModalButton type="fit-container">
                                    <span slot="text">
                                        Ir ao app do Banco <i class="fa-solid fa-mobile-screen-button"></i>
                                    </span>
                                    
                                    <ContentArea slot="content">
                                        <ContentTitle> Bancos Suportados </ContentTitle>
                                        <ContentTitle type="mini"> Selecione </ContentTitle>
                                        
                                        {#each gotoBankList as bank}
                                            <a class="listItem" data-key={bank.name} href={bank.code}>    
                                                <IconField icon={bank.img} bg={bank.bg}>
                                                    {bank.name}
                                                </IconField>
                                            </a>
                                        {/each}
                                    </ContentArea>
                                </ModalButton>
                            </div>
                        </ContentArea>
                    </div>
                {/if}

                <div class="contentArea">
                    {#if selected.type == "pix"}
                        <ContentBanner>
                            <PixSvg />
                        </ContentBanner> 
                    {/if}

                    <ContentArea>
                        <ContentTitle>Informações</ContentTitle>
                        
                        {#if !isNaN(slugs.value)}  
                        <ContentTextWIthTitle name="Valor" type="value" value={slugs.value} readonly={search.vrd!=="1"}/>
                        {/if}

                        <IconField icon={selected.icon} bg={selected.bg} selection="all">
                            {selected.name}
                        </IconField>

                        <IconField icon={selected.owner.icon} bg={selected.owner.bg} selection="all">
                            {selected.owner.name}
                        </IconField>

                        <IconField icon={`/assets/payments/${selected.owner.type}.png`} selection="all">
                            {selected.owner.code}
                        </IconField>
                    </ContentArea>
                    
                    {#if slugs.message}  
                    <ContentArea>
                        <ContentTextWIthTitle name="Mensagem" value={slugs.message} readonly={search.mrd!=="1"}/>
                    </ContentArea>
                    {/if}
                </div>
                <div class="contentArea">
                    <ContentArea>
                        <ContentTitle> Mais </ContentTitle>
                        {#if search.lm == "1"}
                            <div class="inlineField">
                                <GeneralField style="width: 100%;">
                                    <ContentText style="text-align: left; width: 100%;"> Outras formas de pagamento </ContentText>
                                </GeneralField>

                                <a class="doHash buttonContainer" data-key="_" on:click|preventDefault={() => gotoObj({...slugs, method: method.key})} href>
                                    <ContentButton>
                                        <i class="fa-solid fa-list"></i>
                                    </ContentButton>
                                </a>
                            </div>
                        {/if}
                        <div class="inlineField">
                            <GeneralField style="width: 100%;">
                                <ContentText style="text-align: left; width: 100%;">
                                    Mudar modo de cor
                                </ContentText>
                            </GeneralField>


                            <div class="buttonContainer">
                                <ContentButton action={dmSwitch?.switchState}>
                                    <i class="fa-solid fa-circle-half-stroke"></i>
                                </ContentButton>
                            </div>
                            <div class="dmSwitch" style="display:none">
				                <DarkModeSwitch bind:this={dmSwitch} style="transform: scale(0.6); margin: -15px -27px -20px -27px; filter: none;" />
                            </div>
                        </div>
                    </ContentArea>

                    <ContentArea>
                        <div class="inlineField">
                            <GeneralField style="width: 100%;">
                                <ContentText style="text-align: left; width: 100%;">
                                    Compartilhar este pagamento
                                </ContentText>
                            </GeneralField>


                            <div class="buttonContainer">
                                <ContentButton type="fit-container" action={sharePayment}>
                                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                                </ContentButton>
                            </div>
                        </div>
                        <div class="inlineField">
                            <GeneralField style="width: 100%;">
                                <ContentText style="text-align: left; width: 100%;">
                                    Compartilhar site
                                </ContentText>
                            </GeneralField>


                            <div class="buttonContainer">
                                <ContentButton type="fit-container" action={()=>share(location.origin)}>
                                    <i class="fa-solid fa-share-nodes"></i>
                                </ContentButton>
                            </div>
                        </div>
                    </ContentArea>
                </div>
            {:else}
                <div class="contentArea">
                    <ContentArea>
                        <div class="inlineField">
                            <GeneralField style="width: 100%;">
                                <ContentText style="text-align: left; width: 100%;">
                                    Mudar modo de cor
                                </ContentText>
                            </GeneralField>


                            <div class="buttonContainer">
                                <ContentButton action={dmSwitch?.switchState}>
                                    <i class="fa-solid fa-circle-half-stroke"></i>
                                </ContentButton>
                            </div>
                            <div class="dmSwitch" style="display:none">
				                <DarkModeSwitch bind:this={dmSwitch} style="transform: scale(0.6); margin: -15px -27px -20px -27px; filter: none;" />
                            </div>
                        </div>
                    </ContentArea>

                    <ContentArea>
                        <ContentTitle> Selecione </ContentTitle>
                        <ContentBanner color="#009440">
                            <BrazilFlag />
                        </ContentBanner>
                        <div class="space" style="--size: 5px"/>
                        <ContentBanner type="mini">
                            <PixSvg />
                        </ContentBanner>
                        <div class="space"/>
                        
                        {#each list as method}
                            <a class="listItem doHash" data-key={method.key} on:click|preventDefault={() => gotoObj({...slugs, method: method.key}, false, "?lm=1")} href>    
                                <IconField icon={method.icon} bg={method.bg}>
                                    {method.name}
                                </IconField>
                            </a>
                        {/each}
                    </ContentArea>
                </div>
            {/if}
            </ContentPanel>
        </div>
    </div>
</div>

<style lang="scss">
    @use "$style/_fonts.scss";
    @use "$style/_defaults" as defaults;
    @use "$style/_palette.scss" as palette;

    .doHash {
        text-decoration: none;

        &:visited {
            color: inherit; 
        }
    }
    .inlineField .buttonContainer {
        width: 70px;
        display: flex;
        justify-content: stretch;
    }

    .content {
        display: flex;
        flex-direction: row;
        justify-content: center;

        .listItem {
            width: 100%;
        }

        a.listItem {
            text-decoration: none;
            color: inherit;
        }

        .contentArea {
            max-width: 250px;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;

            .space {
                --size: 0;
                height: var(--size);
            }

            .inlineField {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 5px;
            }
        }
    }


    .contentHeader {
            -bottom: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {
            user-select: none;
            font-family: robotoMono;
            text-transform: uppercase;
            color: palette.$highlight;
            text-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
        }

        .year {
            margin-left: 20px;

            .hidden {
                display: none;
            }
        }
    }

    .wrapper {
        display: flex;
        justify-content: center;
        font-size: 30px;
        text-align: right;
        padding: 25px;
        padding-top: 0;

        max-width: 1940px;

        .right {
            width: 100%;
            max-width: 1300px;
        }
    }

    

    @media only screen and (max-width: defaults.$mediaMaxWidth) { 
        .contentHeader {
            flex-direction: column;
            margin-bottom: 50px;

            .title  {
                display: none;
            }

            .year {
                width: 100%;
                margin-left: 0;

                .hidden {
                    display: inline;
                }
            }
        }
        .wrapper {
            padding: 0;
            flex-direction: column;
            align-items: center;

            .flyout {
                margin-bottom: 10px;
            }
        }
    }
</style>