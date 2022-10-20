<script>
	// @ts-nocheck

	import { preSelection, selection as sel } from './stores'

	export let color
	export let selection
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<span
	style:color
	on:click={() => {
		sel.set(selection)
		preSelection.set('none')
	}}
	on:mouseenter={() => preSelection.set(selection)}
	on:mouseleave={() => preSelection.set('none')}><slot /></span
>

<style>
	span {
		text-decoration: underline;
		text-underline-offset: 3px;
		text-decoration-style: dashed;
		cursor: pointer;
	}
</style>
