<script>
    export let color = "#FFFFFF";
    export let textColor = "#000";
    export let type = "";
</script>

<div style="--color: {color}; --textColor: {textColor};" class={type} >
    <slot></slot>
</div> 

<style lang="scss">
    @use "$style/_defaults" as defaults;
    @use "$style/_palette.scss" as palette;

    div {
        --color: #fff;
        background: var(--color);
        --border: 200px;
        border-radius: 20px;
        display: flex;
        gap: 5px;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;

        color: var(--textColor);
        
        &.mini {
            height: 35px;
            padding: 5px;
        }
    }
</style>