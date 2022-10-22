<script>
	import CodeTokens from './CodeTokens.svelte'

	const lines = [
		[
			['let', '#F97583'],
			[' options ', '#E1E4E8'],
			['=', '#F97583'],
			[' {', '#E1E4E8'],
		],
		[
			['  rootMargin: ', '#E1E4E8'],
			["'-49% 0 -49% 0'", '#9ECBFF'],
		],
		[['}', '#E1E4E8']],
		[
			['function', '#F97583'],
			[' ', '#E1E4E8'],
			['callback', '#B392F0'],
			['(', '#E1E4E8'],
			['entries', '#FFAB70'],
			[', ', '#E1E4E8'],
			['observer', '#FFAB70'],
			[') {', '#E1E4E8'],
		],
		[
			['  entries.', '#E1E4E8'],
			['forEach', '#B392F0'],
			['((', '#E1E4E8'],
			['entry', '#FFAB70'],
			[') ', '#E1E4E8'],
			['=>', '#F97583'],
			[' {', '#E1E4E8'],
		],
		[
			['    ', '#E1E4E8'],
			['let', '#F97583'],
			[' step ', '#E1E4E8'],
			['=', '#F97583'],
			[' entry.target.innerText', '#E1E4E8'],
		],
		[
			['    console.', '#E1E4E8'],
			['log', '#B392F0'],
			['(step)', '#E1E4E8'],
		],
		[
			['    console.', '#E1E4E8'],
			['log', '#B392F0'],
			['(entry.isIntersecting)', '#E1E4E8'],
		],
		[
			['    ', '#E1E4E8'],
			['if', '#F97583'],
			[' (entry.isIntersecting) {', '#E1E4E8'],
		],
		[
			['      ', '#E1E4E8'],
			['let', '#F97583'],
			[' sticker ', '#E1E4E8'],
			['=', '#F97583'],
			[' document.', '#E1E4E8'],
			['querySelector', '#B392F0'],
			['(', '#E1E4E8'],
			["'#sticker'", '#9ECBFF'],
			[')', '#E1E4E8'],
		],
		[
			['      sticker.innerText ', '#E1E4E8'],
			['=', '#F97583'],
			[' step', '#E1E4E8'],
		],
		[['    }', '#E1E4E8']],
		[['  });', '#E1E4E8']],
		[['}', '#E1E4E8']],
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
		[
			['document.', '#E1E4E8'],
			['querySelectorAll', '#B392F0'],
			['(', '#E1E4E8'],
			["'.step'", '#9ECBFF'],
			[').', '#E1E4E8'],
			['forEach', '#B392F0'],
			['((', '#E1E4E8'],
			['step', '#FFAB70'],
			[') ', '#E1E4E8'],
			['=>', '#F97583'],
			[' {', '#E1E4E8'],
		],
		[
			['  observer.', '#E1E4E8'],
			['observe', '#B392F0'],
			['(step)', '#E1E4E8'],
		],
		[['})', '#E1E4E8']],
	]
</script>

<pre>
	<code>
    {#each lines as line}<CodeTokens tokens={line} br />{/each}
	</code>
</pre>

<style>
	pre {
		margin: 0;
		padding: 1em;
		background-color: rgb(13, 17, 23);
		color: rgb(201, 209, 217);
		position: relative;
		white-space: normal;
	}
	:global(pre ::selection) {
		background-color: #58a6ff33;
	}
</style>
