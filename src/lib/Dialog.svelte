<script>
	import { selection, demo } from './stores'
	import DialogToken from './DialogToken.svelte'
</script>

{#if $demo == 'scrollytelling'}
	<div class="dialog">scrolly</div>
{:else if $selection == 'none'}
	<div class="dialog">
		<DialogToken color="rgb(126, 231, 135)" selection="observer"
			>IntersectionObserver</DialogToken
		> is a browser API for detecting when an element enters or leaves some part of
		the viewport.
		<br />You pass some options like
		<DialogToken color="rgb(121, 184, 255)" selection="margin"
			>rootMargin</DialogToken
		>
		and
		<DialogToken color="rgb(255, 171, 112)" selection="threshold"
			>threshold</DialogToken
		>, and a
		<DialogToken color="rgb(179, 146, 240)" selection="callback"
			>callback</DialogToken
		> that will run for each intersection.
	</div>
{:else if $selection == 'margin'}
	<div class="dialog" style:background-color="rgba(33, 47, 65, 0.7)">
		To change the section of the viewport you want to observe you can use the
		rootMargin option. The syntax is similar to the CSS margin, but you can only
		use pixels or percentages. The default is "0px".
	</div>
{:else if $selection == 'threshold'}
	<div class="dialog" style:background-color="rgba(57, 45, 39, 0.7)">
		lorem ipsum threshold
	</div>
{:else if $selection == 'callback'}
	<div class="dialog" style:background-color="rgba(43, 40, 62, 0.7)">
		lorem ipsum callback
	</div>
{:else if $selection == 'observer'}
	<div class="dialog" style:background-color="rgba(34, 56, 43, 0.7)">
		lorem ipsum observer
	</div>
{/if}

<style>
	.dialog {
		flex: 1;
		font-family: monospace;
		padding: 1em;
		background-color: rgb(13, 17, 23);
		height: 100%;
		box-sizing: border-box;
	}
</style>
