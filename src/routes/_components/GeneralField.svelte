<script>
    export let color = "";

    export let style = ""; 
</script>

<div class={color} {style}>
    <slot></slot>
</div>

<style lang="scss">
    @use "$style/_defaults" as defaults;
    @use "$style/_palette.scss" as palette;

    div {
        background: palette.$secondary;
        --border: 200px;
        border-radius: 10px;
        border: 5px solid palette.$highlight;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;

        &.primary {
            background: palette.$primary;
        }
    }
</style>