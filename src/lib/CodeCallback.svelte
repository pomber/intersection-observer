<script>
	// @ts-nocheck

	import CodeTokens from './CodeTokens.svelte'
	import { entries } from './stores'

	const lines = [
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

	// split whitespace
	lines.forEach((line, index) => {
		const newLine = line.flatMap(([content, color]) => {
			const contents = content.split(/(\s+)/)
			return contents
				.filter((c) => c)
				.map((content) => {
					return [content, color]
				})
		})

		lines[index] = newLine
	})

	const [firstLine, ...middle] = lines
	const lastLine = middle.pop()

	// add --i and trace class
	let i = 0
	const xlines = middle.map((line) =>
		line.map(([content, color]) => {
			if (content.trim().length < 3) return { content, color }
			return { content, color, i: i++, trace: true }
		})
	)

	$: callback = xlines.map((line, i) => {
		if (i === 0) {
			return [
				...line,
				{ content: ' ' },
				{ content: $entries.length, i: 4, trace: true, value: true },
			]
		}
		if (i === 2) {
			return [
				...line,
				{ content: ' ' },
				...$entries.map((entry) => ({
					content: entry.targetId,
					i: 10,
					trace: true,
					value: true,
				})),
			]
		}
		if (i === 3) {
			return [
				...line,
				{ content: ' ' },
				...$entries.map((entry) => ({
					content: entry.isIntersecting,
					i: 13,
					trace: true,
					value: true,
				})),
			]
		}
		if (i === 4) {
			return [
				...line,
				{ content: ' ' },
				...$entries.map((entry) => ({
					content: entry.intersectionRatio.toFixed(3),
					i: 16,
					trace: true,
					value: true,
				})),
			]
		}
		return line
	})

	let isOff = false
	entries.subscribe(() => {
		isOff = true
		setTimeout(() => {
			isOff = false
		}, 100)
	})
</script>

<div class={isOff ? 'off' : 'on'}>
	<CodeTokens tokens={firstLine} br />
	{#each callback as line}
		<div style:white-space="pre">
			{#each line as { content, color, trace, value, i }}<span
					style:color
					class:trace
					class:value
					style={i != null ? `--i: ${i}` : ''}>{content}</span
				>{/each}
		</div>
	{/each}
	<CodeTokens tokens={lastLine} br />
</div>

<style>
	.trace {
		border-radius: 0.25rem;
	}
	.value {
		border-radius: 0.25rem;
		padding: 0.1rem 0.2rem;
		margin: 0 -0.2rem 0 0;
		background: hsl(261deg 55% 42%);
		color: #e1e4e8;
		position: relative;
		right: 2px;
		user-select: none;
		transition: opacity 0.1s;
	}

	.on .trace {
		filter: brightness(1);
		animation: focus 0.3s;
		animation-delay: calc(0.02s * var(--i));
	}

	.on .trace.value {
		opacity: 0;
		animation: focus 0.3s, show 0.3s;
		animation-delay: calc(0.02s * var(--i));
		animation-fill-mode: forwards;
	}
	.off .value {
		opacity: 0;
	}
	@keyframes focus {
		0% {
			filter: brightness(1);
		}
		10% {
			filter: brightness(1.6);
			background-color: hsl(261deg 55% 42% / 0.5);
		}
		100% {
			filter: brightness(1);
		}
	}

	@keyframes show {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 1;
			background-color: hsl(261deg 55% 50%);
		}
		100% {
			opacity: 1;
		}
	}
</style>
