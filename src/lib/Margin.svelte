<script>
	import { controls } from './stores'
</script>

<div
	style:opacity={!$controls.margin.top && !$controls.margin.bottom ? 0 : 1}
	style:top={$controls.margin.top - 1 + 'px'}
	style:bottom={$controls.margin.bottom - 1 + 'px'}
/>

<style>
	div {
		position: absolute;
		left: 0;
		right: 0;
		border: 2px solid hsl(261deg 55% 50%);
		box-shadow: 0px 0px 8px 1px hsl(261deg 55% 70%);
		transition: top 0.2s, bottom 0.2s, opacity 0.2s;
	}
</style>
