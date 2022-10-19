<script>
	import CodeMarginButtons from './CodeMarginButtons.svelte'
	import { controls, selection } from './stores'

	// @ts-ignore
	const setSelection = (e) => {
		if (!e.key || e.key === 'Enter' || e.key === ' ') {
			selection.set('margin')
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

	$: selected = $selection === 'margin'

	function decreaseTop() {
		controls.update((c) => {
			c.margin.top = c.margin.top - 10
			return c
		})
	}

	function increaseTop() {
		controls.update((c) => {
			c.margin.top = c.margin.top + 10
			return c
		})
	}

	function decreaseBottom() {
		controls.update((c) => {
			c.margin.bottom = c.margin.bottom - 10
			return c
		})
	}

	function increaseBottom() {
		controls.update((c) => {
			c.margin.bottom = c.margin.bottom + 10
			return c
		})
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
		>{#if selected}close{:else}click for more{/if}</span
	>
	<span class="fg">
		<span style:white-space="pre" style:color="#E1E4E8">{'  rootMargin: '}</span
		><span style:color="#9ECBFF">"</span><span
			class="numbers"
			style:color="#9ECBFF"
		>
			<span class="number"
				>{$controls.margin.top}px{#if selected}<span class="buttons"
						><CodeMarginButtons
							decrease={decreaseTop}
							increase={increaseTop}
						/></span
					>{/if}</span
			>,
			<span>0px</span>,
			<span class="number"
				>{$controls.margin.bottom}px{#if selected}<span class="buttons"
						><CodeMarginButtons
							decrease={decreaseBottom}
							increase={increaseBottom}
						/></span
					>{/if}</span
			>,
			<span>0px</span>"</span
		><span style:color="#E1E4E8">{','}</span>
	</span>
</div>

<style>
	div {
		position: relative;
		cursor: pointer;
	}
	.number {
		position: relative;
		display: inline-block;
		min-width: 3ch;
		text-align: center;
		transition: min-width 0.2s;
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

	.selected .number {
		min-width: 6ch;
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
	.selected .bg {
		opacity: 0.7;
	}
</style>
