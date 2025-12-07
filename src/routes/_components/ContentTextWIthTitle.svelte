<script>
	import GeneralField from "./GeneralField.svelte";

    export let value = 0; 
    export let type = "";
    export let readonly = true;
    export let name = "Field Name";

    function formatNumber(num) {
        return new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(num.replace(",", "."));
    }

    let displayText = isNaN(value)? value: formatNumber(value);

</script>

<div class="container">
    <GeneralField>
        <p class="title">{name}</p>
        
        <div class="textContainer">
            <GeneralField color="primary">
                <div class="displayText">
                    {#if type == "value"}
                    <p class="coin"> R$ </p>
                    <p class="text"> {displayText} </p>
                    {:else}
                    <input class="text" type="text" bind:value={displayText} {readonly} />
                    {/if}
                </div>
            </GeneralField>
        </div>
    </GeneralField>
</div>

<style lang="scss">
    @use "$style/_palette.scss" as palette;
    .container {
        width: 100%;

        .textContainer {
            width: 100%;
            font-size: 1rem;

            .displayText {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: 100%;

                .coin {
                    text-align: left;
                }
                
                input.text {
                    background: none;
                    color: palette.$highlight;
                    border: none;
                }
            }
        }

        p {
            font-family: sans-serif;
            
            width: 100%;

            color: palette.$highlight;

            &.title {
                font-size: 1.3rem;
                font-weight: bold;
                text-align: right;
                text-transform: uppercase;
                margin-right: 22px;
            }
        }
    }
</style>