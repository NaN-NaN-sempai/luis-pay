<script>
	import DarkModeSwitch from '$components/DarkModeSwitch.svelte';
	import ChooseLanguageSwitch from '$components/ChoseLanguageSwitch.svelte';
	import Intro from '$components/Intro.svelte';
	import Year from '$components/Year.svelte';
	import SummarizeText from '$components/SummarizeText.svelte';
	import Footer from '$components/footer/Footer.svelte';

	export let data;	

	import translations from '$trad';
	import { text } from '@sveltejs/kit';
	let texts;
	translations.subscribe((value) => {
		texts = value;		
	});
</script>

<svelte:head>
	<meta property="og:title" content={data.og.title}>
	<meta property="og:description" content={data.og.description}>
	<meta property="og:image" content={data.og.image}>
	<meta property="og:url" content={data.og.url}>
</svelte:head>

<div class="container">
	<div class="outer">
		<div class="inner">
			<div class="intro">
				<Intro {data} />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@use '$style/_fonts.scss';
	@use '$style/_defaults' as defaults;
	@use '$style/_palette.scss' as palette;
	@use '$style/_cursors.scss' as cursors;

    .container {
        display: flex;
        /* min-height: 100vh; */
        flex-direction: column;
        justify-content: space-between;
    }

	@media only screen and (min-width: defaults.$mediaMinWidth) {
		.outer {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}

	.inner > * {
		margin-block: 20px;
	}

	.centralize {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.splitter {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 30px;

		.hidden {
			display: none;

			@media (max-width: defaults.$mediaMaxWidth) {
				display: block;
			}
		}

		.name {
			font-family: sansation;
			font-weight: bold;
			text-transform: uppercase;
			color: palette.$highlight;
			text-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
			font-size: 40px;
			text-align: center;
			user-select: none;

			display: flex;
			flex-direction: column;
			gap: 10px;
		}

		@media (max-width: defaults.$mediaMaxWidth) {
			flex-direction: column;
		}
	}
</style>
