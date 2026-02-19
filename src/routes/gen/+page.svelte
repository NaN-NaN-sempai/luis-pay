<script>
	import DarkModeSwitch from '$components/DarkModeSwitch.svelte';
	import gotoBankList from '$lib/gotoBankList';
    import paymentData from '$lib/payment-info.js';
	import { share } from '$lib/share';
	import ContentArea from '../_components/ContentArea.svelte';
	import ContentButton from '../_components/ContentButton.svelte';
	import ContentTextWIthTitle from '../_components/ContentTextWIthTitle.svelte';
	import ContentTitle from '../_components/ContentTitle.svelte';
	import IconField from '../_components/IconField.svelte';
	import ModalButton from '../_components/modal/ModalButton.svelte';

    const paymentDataArr = Object.entries(paymentData).filter(([key, value]) => value.type === 'pix');



    let method;
    let value;
    let message;
    

    let bankModal;


    const gen = () => {
        let endMethod;
        if (method) {
            endMethod = method;
        } else if (!value && !message) {
            endMethod = null;
        } else {
            endMethod = "_";
        }
        
        let endvalue;
        if (value) {
            endvalue = parseFloat(value.replace(",", ".")).toFixed(2);
        
        } else if (message) {
            endvalue = "_";

        } else {
            endvalue = null;
        }

        let endMessage = message? encodeURIComponent(message) : null;

        
        let path = `${endMethod || ""}${ endvalue ? "/" + endvalue : ""}${ endMessage ? "/" + endMessage : ""}`;

        path = path? "enc/" + btoa(path) : "";

        const str = `${location.origin}/${path}`;

        share(str, `${endvalue == "_"? "Valor: `a definir`": endvalue != null? "Valor: R$ `" + endvalue + "`": ""}${endMessage? `\n${"`" + message.trim() + "`"}`: ""}\n`);
        
        
    }

</script>

<div class="container">
	<div class="outer">
		<div class="inner">
            
            <DarkModeSwitch style="transform: scale(0.6); margin: -15px -27px -20px -27px; filter: none;" />

            <ModalButton bind:this={bankModal}>
                <span slot="text">
                    {#if !method}
                        Selecione um Banco
                    {:else}
                        Banco: {method}
                    {/if}
                </span>

                 <ContentArea slot="content">
                    <ContentTitle> Bancos </ContentTitle>
                    <ContentTitle type="mini"> Selecione </ContentTitle>

                    {#each paymentDataArr as item, index }
                        <button class="listItem" on:click={() => {
                            method = item[0];
                            bankModal.hideModal();
                        }}>    
                            <IconField icon={item[1].icon} bg={item[1].bg}>
                                {item[0]} - <strong>{item[1].owner.name}</strong>
                            </IconField>
                        </button>
                    {/each}
                </ContentArea>
            </ModalButton>
                
            <ContentTextWIthTitle name="Valor" type="value" readonly={false} onchange={e => value = e.target.value} placeholder="Deixe em branco para o pagante definir"/>

            <ContentTextWIthTitle name="Mensagem" type="text" readonly={false} onchange={e => message = e.target.value} value="" placeholder="Digite uma mensagem"/>

            <ContentButton action={gen}>
                Gerar cobrança
            </ContentButton>

		</div>
	</div>
</div> 

<style lang="scss">
    .inner {
        /* centralizado */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        max-width: 700px;
        margin: 0 auto;
    }

    .listItem {
        display: block;
        width: 100%;
        border: none;
        background: none;
        cursor: pointer;

        &:hover {
            background: rgba(0, 0, 0, 0.2);
        }
    }
</style>