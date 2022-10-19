<script>
	/**
	 * @type {() => void}
	 */
	export let decrease
	/**
	 * @type {() => void}
	 */
	export let increase
</script>

<span class="group">
	<button on:click={decrease}
		><svg
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M20 12H4"
			/>
		</svg></button
	>
	<button on:click={increase}
		><svg
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 6v6m0 0v6m0-6h6m-6 0H6"
			/></svg
		></button
	>
</span>

<style>
	.group {
		display: inline-block;
		font-size: 6px;
		border-radius: 4px;
		border: 1px solid hsl(261deg 55% 60%);
		overflow: hidden;
		background: hsl(215deg 28% 17%);
		width: 40px;
		height: 20px;
		position: relative;
	}
	button {
		display: inline-block;
		position: absolute;
		width: 20px;
		height: 20px;
		border: none;
		background: none;
		color: white;
		font-size: 10px;
		margin: 0;
		padding: 0;
		cursor: pointer;
		user-select: none;
		transition: opacity 0.2s ease;
	}
	button:first-child {
		left: 0;
	}
	button:last-child {
		right: 0;
	}
	button:hover {
		background: hsl(215deg 28% 30%);
	}
	svg {
		width: 14px;
		height: 14px;
		display: block;
		margin: 0 auto;
		stroke: currentColor;
		fill: currentColor;
	}
</style>
