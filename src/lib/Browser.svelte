<script>
	import Margin from './Margin.svelte'
	import Overlay from './Overlay.svelte'
	import { browserTop } from './stores'

	let top = 100
	let moving = false

	const pageHeight = 620
	const browserHeight = 200

	function onMouseDown() {
		moving = true
	}
	function onMouseUp() {
		moving = false
	}

	/**
	 * @param {{ movementY: number; }} e
	 */
	function onMouseMove(e) {
		if (moving) {
			const prevTop = top
			let nextTop = prevTop + e.movementY
			nextTop = Math.max(0, nextTop)
			nextTop = Math.min(pageHeight - browserHeight, nextTop)
			top = nextTop
			browserTop.set({ prev: prevTop, next: nextTop })
		}
	}
</script>

<Overlay {top} {browserHeight} />

<div
	class="browser"
	style:transform="translateY({top}px)"
	on:mousedown={onMouseDown}
>
	<div class="chrome-top" data-moving={moving}>
		<div class="frame-buttons">
			<div class="frame-button left" />
			<div class="frame-button middle" />
			<div class="frame-button right" />
		</div>
		<div class="url" />
		<div />
	</div>
	<Margin />
</div>
<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<style>
	.browser {
		width: 100%;
		height: 200px;
		background: #2222;
		position: absolute;
		user-select: none;
		cursor: move;
		box-shadow: 0px 0px 2px 1px hsl(261deg 55% 80%);
	}
	.chrome-top {
		height: 25px;
		background: rgb(13, 17, 23);
		width: 100%;
		position: absolute;
		top: 0;
		transform: translateY(-100%);
		border-radius: 4px 4px 0 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		transition: opacity 0.2s;
		box-shadow: 0px 0px 2px 1px hsl(261deg 55% 80%);
	}

	.chrome-top[data-moving='true'] {
		opacity: 0.2;
	}

	.chrome-top > div:last-child {
		width: 40.5px;
	}

	.chrome-top .url {
		height: 14px;
		border-radius: 4px;
		border: 1px solid #444;
		background-color: #666;
		width: 50%;
	}

	.frame-buttons {
		font-size: 14px;
		margin: 0 0.6em;
		flex-shrink: 0;
		height: 100%;
		display: flex;
		gap: 0.4em;
		align-items: center;
	}

	.frame-button {
		width: 0.7em;
		height: 0.7em;
		border: 0.08em solid;
		border-radius: 50%;
		display: inline-block;
		box-sizing: border-box;
	}

	.frame-button {
		border-color: #5c5c5c;
		background-color: #535353;
	}
</style>
