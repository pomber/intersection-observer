<script>
	import { controls } from './stores'
</script>

<span style:white-space="pre" style:color="#E1E4E8">{'  threshold: ['}</span
><span style:color="#9ECBFF"
	>{$controls.thresholds.map((x) => x.toFixed(2)).join(', ')}</span
><span style:color="#E1E4E8">{']'}</span><br />
