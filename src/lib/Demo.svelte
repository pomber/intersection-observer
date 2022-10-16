<script>
	import Boxes from './Boxes.svelte'
	import Browser from './Browser.svelte'
	import Page from './Page.svelte'
</script>

<div class="demo">
	<Page />
	<Boxes />
	<Browser />
</div>

<style>
	.demo {
		position: relative;

		width: 100px;
		height: 100px;
		background: white;

		height: 620px;
		width: 400px;
		color: black;
	}
</style>
