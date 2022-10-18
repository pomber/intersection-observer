<script>
	import { settings } from './stores'

	const { elements, title } = $settings
</script>

<section class="page">
	<h2>{title}</h2>
	{#each elements as element (element.id)}
		<div
			class="element"
			style:top="{element.top}px"
			style:height="{element.height}px"
			style:width="{element.width}px"
			style:left="{element.left}px"
		>
			<span class="ruler" />
			<span class="ruler" />
			<span class="ruler" />
			<span class="ruler" />
			<span>{element.id}</span>
		</div>
	{/each}
</section>

<style>
	.page {
		position: absolute;
		background-color: #fafafa;
		padding: 0 10px;
		box-sizing: border-box;
		height: 100%;
		width: 100%;
	}
	h2 {
		font-size: 1.5em;
		margin: 0;
		padding: 0;
		top: 25px;
		width: 100%;
		text-align: center;
		color: #444;
		position: absolute;
	}

	.element {
		background: #ccc;
		color: #333;
		font-weight: 700;
		width: 185px;
		box-sizing: border-box;
		padding: 10px;
		font-family: monospace;
		position: absolute;
		border-radius: 6px;
		font-size: 1.2rem;
		text-align: right;
	}

	.ruler {
		position: absolute;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: #888;
		opacity: 0.4;
	}

	.ruler:before {
		position: absolute;
		left: 2px;
		top: -1.4em;
		color: #666;
		font-size: 0.7em;
	}
	.ruler:nth-child(1) {
		top: 20%;
	}
	.ruler:nth-child(1):before {
		content: '20%';
	}
	.ruler:nth-child(2) {
		top: 40%;
	}
	.ruler:nth-child(2):before {
		content: '40%';
	}
	.ruler:nth-child(3) {
		top: 60%;
	}
	.ruler:nth-child(3):before {
		content: '60%';
	}
	.ruler:nth-child(4) {
		top: 80%;
	}
	.ruler:nth-child(4):before {
		content: '80%';
	}
</style>
