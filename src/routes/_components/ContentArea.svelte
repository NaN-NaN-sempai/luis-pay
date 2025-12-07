<div>
    <slot></slot>
</div> 

<style lang="scss">
    @use "$style/_defaults" as defaults;
    @use "$style/_palette.scss" as palette;

    div {
        background: palette.$primary;
        --border: 200px;
        border-radius: 20px;
        display: flex;
        gap: 5px;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
    }
</style>