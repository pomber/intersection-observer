<script>
	import { boxes, entries, isOff, settings } from './stores'
</script>

<div class="boxes {$isOff ? 'off' : 'on'}">
	{#each $boxes as box (box.id)}
		<div
			class="box"
			style:top="{box.top}px"
			style:height="{box.height}px"
			style:width="{box.width}px"
			style:left="{box.left}px"
			style:opacity={box.opacity}
			style:text-align={box.textAlign}
			class:last={$entries.some((e) => e.box === box)}
		>
			{#if $settings.showRulers}
				{box.threshold.toFixed(2)}
			{/if}
		</div>
	{/each}
</div>

<style>
	.boxes {
		font-family: monospace;
		font-size: 1.2rem;
		color: hsl(261deg 55% 15%);
	}
	.box {
		position: absolute;
		background: hsl(261deg 55% 90% / 80%);
		border-radius: 4px;
		border: 1px solid hsl(261deg 55% 30% / 80%);

		writing-mode: vertical-rl;
		line-height: 1em;
		padding: 0.4em 0;
		letter-spacing: -0.1ch;
		box-sizing: border-box;
		transition: background 0.2s, top 0.4s, left 0.4s, height 0.4s ease;
	}
	.last {
		background: hsl(261deg 55% 42%);
		color: #e1e4e8;
	}
	.off .last {
		animation: focus 0.25s;
	}

	@keyframes focus {
		0% {
			filter: brightness(1);
		}
		30% {
			filter: brightness(1.6);
			background-color: hsl(261deg 55% 46%);
		}
		100% {
			filter: brightness(1);
		}
	}
</style>
