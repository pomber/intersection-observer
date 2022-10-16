import { writable, derived } from 'svelte/store'
import { getBoxes } from './box'

const oneTop = 120
const oneLeft = 10
const oneHeight = 180
const oneWidth = 185
const twoTop = 220
const twoHeight = 300
const twoLeft = oneLeft + oneWidth + oneLeft

export const settings = writable({
	browserHeight: 200,
	pageHeight: 620,
	boxWidth: 20,
	elements: [
		{
			id: '#one',
			top: oneTop,
			width: 185,
			height: oneHeight,
			left: oneLeft,
		},
		{
			id: '#two',
			top: twoTop,
			width: 185,
			height: twoHeight,
			left: twoLeft,
		},
	],
})

export const controls = writable({
	margin: { top: 0, bottom: 0 },
	thresholds: [0.5],
})

export const boxes = derived([settings, controls], ([$settings, $controls]) => {
	const { margin, thresholds } = $controls
	return getBoxes(thresholds, margin, $settings)
})
