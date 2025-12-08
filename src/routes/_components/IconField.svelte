<script>
	import ContentText from "./ContentText.svelte";
    import GeneralField from "./GeneralField.svelte";
	import QrText from "./QrText.svelte";
	import TextField from "./textField.svelte";
    
    export let icon = "";
    export let bg = "transparent";

    export let selection = "none";
</script>


<div class="container">
    {#if icon}
        <div class="icon">
            <GeneralField style="padding: 0">
                <img src="{icon}" alt="ICON" style="--bg: {bg}">
            </GeneralField>
        </div>

        <!-- CREATE COMPONENT -->
    {/if}

    <div class="text">
        <GeneralField>
            <div class="text">
                <ContentText>
                    <TextField {selection}>
                        <slot></slot>
                    </TextField>
                </ContentText>
            </div>
        </GeneralField>
    </div>
</div>

<style lang="scss">

    .container {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 5px;

        .text {
            width: 100%;
            text-align: left;
        }
        
        .icon {
            height: 100%;

            img {
                border-radius: 5px;
                height: 40px;
                width: 40px;
                background: var(--bg);
            }
        }
    }
</style>