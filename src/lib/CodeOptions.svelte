<script>
	import CodeMargin from './CodeMargin.svelte'
	import CodeThreshold from './CodeThreshold.svelte'
	import CodeTokens from './CodeTokens.svelte'
	import { selection } from './stores'

	const first = [
		['let', '#F97583'],
		[' options ', '#E1E4E8'],
		['=', '#F97583'],
		[' {', '#E1E4E8'],
	]
	const closeLine = [['}', '#E1E4E8']]
</script>

<CodeTokens tokens={first} br />
<CodeMargin />
<div
	class="post-margin"
	style:transform="translateY({$selection == 'margin' ? 1.4 : 0}em)"
	style:transition="transform 0.2s"
>
	<CodeThreshold />
	<CodeTokens tokens={closeLine} />
</div>
