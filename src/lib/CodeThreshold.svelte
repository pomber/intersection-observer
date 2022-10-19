<script>
	import CodeThresholdButtons from './CodeThresholdButtons.svelte'
	import { controls, selection } from './stores'

	// @ts-ignore
	const setSelection = (e) => {
		if (!e.key || e.key === 'Enter' || e.key === ' ') {
			selection.set('threshold')
		} else if (e.key === 'Escape') {
			selection.set('none')
		}
	}
	// @ts-ignore
	const resetSelection = (e) => {
		if (selected) {
			selection.set('none')
			e.stopPropagation()
		}
	}

	$: selected = $selection === 'threshold'

	/**
	 * @param {number} i
	 */
	function decrease(i) {
		if ($controls.thresholds[i] < 0.1) return
		controls.update((c) => {
			c.thresholds[i] = c.thresholds[i] - 0.1
			return c
		})
	}

	/**
	 * @param {number} i
	 */
	function increase(i) {
		if ($controls.thresholds[i] > 0.9) return
		controls.update((c) => {
			c.thresholds[i] = c.thresholds[i] + 0.1
			return c
		})
	}

	/**
	 * @param {number} i
	 */
	function remove(i) {
		if ($controls.thresholds.length === 1) return
		controls.update((c) => {
			c.thresholds.splice(i, 1)
			return c
		})
	}

	/**
	 * @param {number} value
	 */
	function round(value) {
		return Math.round(value * 100) / 100
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
	tabindex="0"
	class:selected
	data-selection={$selection}
	on:click={setSelection}
	on:keydown={setSelection}
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<span class="bg" on:click={resetSelection}
		>{#if selected}close{:else}click to know more{/if}</span
	>
	<span class="fg">
		<span style:white-space="pre" style:color="#E1E4E8">{'  threshold: ['}</span
		><span style:color="#9ECBFF"
			>{#each $controls.thresholds as t, i}<span class="number"
					>{t.toFixed(2)}<span class="buttons"
						><CodeThresholdButtons
							decrease={() => decrease(i)}
							remove={() => remove(i)}
							increase={() => increase(i)}
						/></span
					></span
				>{#if i < $controls.thresholds.length - 1},{/if}{/each}</span
		><span style:color="#E1E4E8">{']'}</span></span
	>
</div>

<style>
	div {
		position: relative;
		cursor: pointer;
	}
	.fg {
		position: relative;
	}
	.bg {
		opacity: 0;
		position: absolute;
		top: 0;
		left: -1em;
		right: -1em;
		padding-right: 1em;
		height: 100%;
		background-color: #58a6ff33;
		text-align: right;
		transition: opacity 0.2s;
		user-select: none;
	}
	.number {
		position: relative;
		display: inline-block;
		min-width: 5ch;
		text-align: center;
		transition: min-width 0.2s;
	}
	.selected .number {
		min-width: 7ch;
	}

	.buttons {
		position: absolute;
		opacity: 0;
		transform: translate(-50%, 50%);
		left: 50%;
		top: 0;
		transition: opacity 0.2s, transform 0.2s ease-out;
		user-select: none;
		height: 22px;
	}

	.selected .buttons {
		transform: translate(-50%, 100%);
		display: inline-block;
		opacity: 1;
	}
	div:hover .bg,
	.selected .bg {
		opacity: 0.7;
	}
</style>
