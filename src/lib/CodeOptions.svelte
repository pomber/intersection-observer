<script>
	import CodeTokens from './CodeTokens.svelte'

	const first = [
		['let', '#F97583'],
		[' options ', '#E1E4E8'],
		['=', '#F97583'],
		[' {', '#E1E4E8'],
	]
	const thresholdsLine = [
		['  threshold: [', '#E1E4E8'],
		[']', '#E1E4E8'],
	]
	const closeLine = [['}', '#E1E4E8']]
</script>

<CodeTokens tokens={first} br />
<CodeTokens tokens={thresholdsLine} /><br />
<CodeTokens tokens={closeLine} />
