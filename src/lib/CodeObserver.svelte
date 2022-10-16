<script>
	import CodeTokens from './CodeTokens.svelte'

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
</script>

{#each lines as line}<CodeTokens tokens={line} br />{/each}
