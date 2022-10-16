<script>
	import Explainer from '$lib/Explainer.svelte'
</script>

<h1>Intersection Observer</h1>

<section class="explainer">
	<Explainer />
</section>

<section class="FAQ">
	<h2>FAQ</h2>
</section>

<style>
	h1 {
		font-size: 2rem;
		text-align: center;
		margin: 3rem 0 4rem;
	}
	h2 {
		text-align: center;
		margin-top: 5rem;
	}

	:root {
		font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
		font-size: 16px;
		line-height: 24px;
		font-weight: 400;

		color: rgba(255, 255, 255, 0.87);
		background-color: hsl(216deg 28% 9%);

		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
	}
</style>
