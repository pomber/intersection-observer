<script>
	import CodeTokens from './CodeTokens.svelte'
	import { preSelection, selection } from './stores'

	const lines = [
		[
			['let', '#F97583'],
			[' observer ', '#E1E4E8'],
			['=', '#F97583'],
			[' ', '#E1E4E8'],
			['new', '#F97583'],
			[' ', '#E1E4E8'],
			['IntersectionObserver', '#B392F0'],
			['(callback, options)', '#E1E4E8'],
		],
		[['', '#E1E4E8']],
		[
			['observer.', '#E1E4E8'],
			['observe', '#B392F0'],
			['(document.', '#E1E4E8'],
			['querySelector', '#B392F0'],
			['(', '#E1E4E8'],
			["'#one'", '#9ECBFF'],
			['))', '#E1E4E8'],
		],
		[
			['observer.', '#E1E4E8'],
			['observe', '#B392F0'],
			['(document.', '#E1E4E8'],
			['querySelector', '#B392F0'],
			['(', '#E1E4E8'],
			["'#two'", '#9ECBFF'],
			['))', '#E1E4E8'],
		],
	]
	$: selected = $selection === 'observer'
	$: preSelected = $preSelection === 'observer'
</script>

<div class="observer" class:selected class:preSelected>
	<span class="bg" />
	<span class="code">
		{#each lines as line}<CodeTokens tokens={line} br />{/each}</span
	>
</div>

<style>
	.observer {
		position: relative;
	}
	.code {
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
		background-color: rgb(34, 56, 43);
		text-align: right;
		transition: opacity 0.2s;
		user-select: none;
	}
	.observer:hover .bg,
	.preSelected .bg,
	.selected .bg {
		opacity: 0.8;
	}
</style>
