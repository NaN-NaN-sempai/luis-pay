<script>
    export let selection = "none";
</script>

<span class="qrslot" style="--selection: {selection}">
    <slot></slot>
</span>

<style lang="scss">
    .qrslot {
        font-size: .8rem;
        text-align: justify;
        user-select: var(--selection);
        max-width: 100%;
        overflow: hidden;      
        text-overflow: ellipsis; 
        display: -webkit-box;  
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
        word-break: break-all;
    }
</style>