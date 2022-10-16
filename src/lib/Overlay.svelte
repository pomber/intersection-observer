<script>
	/**
	 * @type {number}
	 */
	export let top
	/**
	 * @type {number}
	 */
	export let browserHeight
</script>

<div class="container">
	<div class="top" style:transform="translateY(-100%) translateY({top}px)" />
	<div
		class="bottom"
		style:transform="translateY({browserHeight}px) translateY({top}px)"
	/>
</div>

<style>
	.container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		overflow: hidden;
	}

	.top,
	.bottom {
		position: absolute;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
	}
</style>
