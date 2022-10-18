<script>
	import CodeMargin from './CodeMargin.svelte'
	import CodeThreshold from './CodeThreshold.svelte'
	import CodeTokens from './CodeTokens.svelte'

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
<CodeThreshold />
<CodeTokens tokens={closeLine} />
