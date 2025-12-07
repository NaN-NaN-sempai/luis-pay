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
    let size = 164;
    const roundness = 3;

    function getSvgSize(svgString) {
        const sizeRegex = /<svg[^>]*\s+width="(\d+)"/i;
        
        const sizeMatch = svgString.match(sizeRegex);
        
        if (sizeMatch && sizeMatch[1]) {
            return parseInt(sizeMatch[1], 10);
        }
        return null;
    }

    $: if (code) {
        fetch(src)
            .then(r => r.text())
            .then(data => {       
                size = getSvgSize(data);
                         
                path = data.match(/<path[^>]* d="([^"]*)"/)[1];

                let union = simplifyPath(path); 

                let round = roundCorners(union, roundness, 2);
                path = round.path;
            });
    }
</script>

{#if path}
    <svg class="QR" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" preserveAspectRatio="xMidYMid meet" data-src={src}>
        <title>{title}</title>
        <desc>{code}</desc>
        <g id="elements">
            <rect xmlns="http://www.w3.org/2000/svg" rx={roundness * 2} x="0" y="0" width="100%" height="100%"/>
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
