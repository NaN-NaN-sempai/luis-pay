<script>
	import ContentButton from "../ContentButton.svelte";


    export let type = "";
    export let height = "";

    let modal = false;

    export const showModal = () => {
        modal = true;
    }

    export const hideModal = () => {        
        modal = false;
    }
</script>



<ContentButton action={showModal} {type} {height}>
    <slot name="text"/>
</ContentButton>

<div class="modalBg" style="display: {modal ? 'block' : 'none'}" on:click={hideModal} on:keydown={hideModal}></div>
<dialog open={modal}>
    <slot name="content" />
</dialog>


<style lang="scss">
    dialog, .modalBg {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: transparent;
        border: none;
        z-index: 100;
    }

    .modalBg {
        background: rgba(0, 0, 0, .4);
        backdrop-filter: blur(5px);
        width: 100%;
        height: 100%;
    }
</style>