<script>
	import CodeCallback from './CodeCallback.svelte'
	import CodeObserver from './CodeObserver.svelte'
	import CodeOptions from './CodeOptions.svelte'
</script>

<pre>
	<code>
		<CodeOptions />
		<CodeCallback />
		<br />
		<CodeObserver />
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
