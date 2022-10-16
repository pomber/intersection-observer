<script>
	import Code from './Code.svelte'
	import Demo from './Demo.svelte'
	import Dialog from './Dialog.svelte'
</script>

<main>
	<div class="bg" />
	<Demo />
	<div class="right">
		<Dialog />
		<Code />
	</div>
</main>

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
