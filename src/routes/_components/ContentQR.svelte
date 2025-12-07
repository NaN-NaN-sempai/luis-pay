<script>
	import { simplifyPath } from "$lib/pathUtils";
    import { roundCorners } from "$lib/roundCorners";
    import polygonClipping from 'polygon-clipping';
    import Spinner from "./Spinner.svelte"
	import { onMount } from "svelte";


    export let code = "";
    export let title = "QR Code";
    const src = "https://api.qrserver.com/v1/create-qr-code/?format=svg&size=200x200&data="+code;

    let path = "";
    let roundness = 10;

    $: if (code) {        
        const match = code.replace(/\n/g, "").match(/<path[^>]* d="([^"]*)"/);
        if (match) {
            path = match[1];
            let union = simplifyPath(path);
            let round = roundCorners(union, roundness, 2);
            path = round.path;
        } else {
            path = "";
        }
    }
</script>

{#if path}
    <svg class="QR" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164 164" preserveAspectRatio="xMidYMid meet" data-src={src}>
        <title>{title}</title>
        <desc>{code}</desc>
        <g id="elements">
            <rect xmlns="http://www.w3.org/2000/svg" rx={roundness * 2} x="0" y="0" width="164" height="164"/>
            <path d="{path}"/>
        </g>
    </svg>

{:else}

    <div class="spinner">
        <Spinner/>
    </div>

{/if}




<style lang="scss">
    @use "$style/_palette.scss" as palette;

    .spinner {
        width: 100%;
        display: flex;
        align-items: center;
    }
    .QR {
        width: 100%;
        height: auto;
        display: block;

        animation: showup 1.5s;

        rect {
            fill: palette.$primary;
        }
        
        path {
            fill: palette.$highlight;
        }
    }

    @keyframes showup {
        from {opacity: 0;}
        to   {opacity: 1;}
    }
</style>
