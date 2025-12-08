<script>
	import '$style/index.scss';

	import { setContext } from 'svelte';

	import DarkModeSwitch from '$components/DarkModeSwitch.svelte';
	import ChooseLanguageSwitch from '$components/ChoseLanguageSwitch.svelte';
	import SummarizeText from '$components/SummarizeText.svelte';
	import Footer from '$components/footer/Footer.svelte';
</script>

<div class="container">
	<div class="inner">
		<div class="hidden">
			<div class="darkmode centralize">
				<!-- <DarkModeSwitch /> -->
			</div>
			
			<div class="chooselang centralize">
				<ChooseLanguageSwitch />
			</div>
			<div class="summarize centralize">
				<SummarizeText />
			</div>
		</div>
	</div>
	<slot />
	<div class="footer">
		<Footer />
	</div>
</div>

<style lang="scss">
	@use '$style/_fonts.scss';
	@use '$style/_defaults' as defaults;
	@use '$style/_palette.scss' as palette;
	@use '$style/_cursors.scss' as cursors;

	.hidden {
		display: none;
	}

	@media only screen and (min-width: defaults.$mediaMinWidth) {
		.outer {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}

	.container {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
		justify-content: space-between;
	}
    .footer {
        margin-top: 20px;    
    }

	.inner > * {
		margin-block: 20px;
	}

	.centralize {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.chooselang {
		margin-top: -10px;
	}
	.summarize {
		margin-top: -5px;
		margin-bottom: -10px;
	}
</style>
