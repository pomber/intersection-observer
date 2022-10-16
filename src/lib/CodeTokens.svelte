<script>
	/**
	 * @type {string[][]}
	 */
	export let tokens
	/**
	 * @type {boolean}
	 */
	export let br = false
</script>

<span style:white-space="pre"
	>{#each tokens as [content, color]}<span style:color>{content}</span
		>{/each}{#if br}<br />{/if}</span
>
