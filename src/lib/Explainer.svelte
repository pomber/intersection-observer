<script>
	import Code from './Code.svelte'
	import Demo from './Demo.svelte'
	import Dialog from './Dialog.svelte'
	import ScrollytellingCode from './ScrollytellingCode.svelte'
	import { demo } from './stores'
</script>

<main>
	<div class="bg" />
	{#if $demo === 'playground'}
		<Demo />
		<div class="right">
			<Dialog />
			<Code />
		</div>
	{/if}
	{#if $demo === 'lazyloading'}
		<Demo />
		<div class="right">
			<Dialog />
			<Code />
		</div>
	{/if}
	{#if $demo === 'scrollytelling'}
		<Demo />
		<div class="right">
			<Dialog />
			<ScrollytellingCode />
		</div>
	{/if}
</main>
<section>
	<button on:click={() => demo.set('playground')}>Playground</button>
	<button on:click={() => demo.set('lazyloading')}>Lazy Loading</button>
	<button on:click={() => demo.set('scrollytelling')}>Scrollytelling</button>
</section>

<style>
	main {
		display: flex;
		flex-direction: row;
		gap: 16px;
		width: 960px;
		margin: 0 auto;
		position: relative;
	}
	.right {
		display: flex;
		flex-direction: column;
		gap: 16px;
		width: 544px;
		max-width: 544px;
	}
	.bg {
		position: absolute;
		top: -80px;
		left: -10px;
		right: -10px;
		bottom: -120px;
		background: black;
		filter: blur(60px);
		transform: translateZ(0px);
		z-index: -1;
	}
</style>
