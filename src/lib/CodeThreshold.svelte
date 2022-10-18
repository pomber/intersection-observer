<script>
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
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
	tabindex="0"
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
			>{$controls.thresholds.map((x) => x.toFixed(2)).join(', ')}</span
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
	div:hover .bg,
	div[data-selection='threshold'] .bg {
		opacity: 0.7;
	}
</style>
