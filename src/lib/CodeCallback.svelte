<script>
	import CodeTokens from './CodeTokens.svelte'

	// console.log(
	// 	lines.map((line) => line.map((token) => [token.content, token.style.color]))
	// )

	const lines = [
		[['', '#E1E4E8']],
		[
			['function', '#F97583'],
			[' ', '#E1E4E8'],
			['callback', '#B392F0'],
			['(', '#E1E4E8'],
			['entries', '#FFAB70'],
			[', ', '#E1E4E8'],
			['observer', '#FFAB70'],
			[')', '#E1E4E8'],
			[' {', '#E1E4E8'],
		],
		[
			['  console.', '#E1E4E8'],
			['log', '#B392F0'],
			['(entries.', '#E1E4E8'],
			['length', '#79B8FF'],
			[')', '#E1E4E8'],
		],
		[
			['  entries.', '#E1E4E8'],
			['forEach', '#B392F0'],
			['(', '#E1E4E8'],
			['entry', '#FFAB70'],
			[' ', '#E1E4E8'],
			['=>', '#F97583'],
			[' {', '#E1E4E8'],
		],
		[
			['    console.', '#E1E4E8'],
			['log', '#B392F0'],
			['(entry.target.id)', '#E1E4E8'],
		],
		[
			['    console.', '#E1E4E8'],
			['log', '#B392F0'],
			['(entry.isIntersecting)', '#E1E4E8'],
		],
		[
			['    console.', '#E1E4E8'],
			['log', '#B392F0'],
			['(entry.intersectionRatio)', '#E1E4E8'],
		],
		[['  })', '#E1E4E8']],
		[['}', '#E1E4E8']],
	]
</script>

{#each lines as line}<CodeTokens tokens={line} br />{/each}
