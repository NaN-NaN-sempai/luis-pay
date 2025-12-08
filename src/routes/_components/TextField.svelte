<script>
    export let selection = "none";
</script>

<span style="--selection: {selection}">
    <slot></slot>
</span>

<style lang="scss">
    span {
        user-select: var(--selection);
        max-width: 100%;       /* altura máxima */
        overflow: hidden;      /* esconde o excesso */
        text-overflow: ellipsis; /* adiciona "..." */
        display: -webkit-box;  /* necessário para limitar linhas */
        -webkit-line-clamp: 1; /* número máximo de linhas */
        line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: break-all; /* para quebrar em qualquer caractere */
    }
</style>