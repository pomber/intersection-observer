import { writable, derived } from 'svelte/store'
import { getBoxes, type Box } from './box'

const oneTop = 120
const oneLeft = 10
const oneHeight = 180
const oneWidth = 185
const twoTop = 220
const twoHeight = 300
const twoLeft = oneLeft + oneWidth + oneLeft

type Entry = {
	isIntersecting: boolean
	intersectionRatio: number
	targetId: string
	box: Box
	threshold: number
}

export const selection = writable('none' as 'none' | 'margin' | 'threshold')

export const settings = writable({
	browserHeight: 200,
	pageHeight: 620,
	boxWidth: 20,
	title: 'a web page',
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
	thresholds: [0.2, 0.6],
})

export const boxes = derived([settings, controls], ([$settings, $controls]) => {
	const { margin, thresholds } = $controls
	return getBoxes(thresholds, margin, $settings)
})

export const browserTop = writable({ prev: 1000, next: 0 })

export const entries = derived(
	[boxes, controls, settings, browserTop],
	([$boxes, $controls, $settings, $top], set) => {
		const prevTop = $top.prev + $controls.margin.top
		const nextTop = $top.next + $controls.margin.top

		const rootHeight =
			$settings.browserHeight - $controls.margin.top - $controls.margin.bottom
		const entries = [] as Entry[]

		$settings.elements.forEach((element) => {
			const elementBoxes = $boxes.filter(
				(b) => b.element.id === element.id && !b.disabled
			)
			for (const box of elementBoxes) {
				if (
					(prevTop <= box.top && box.top < nextTop) ||
					(nextTop < box.top && box.top <= prevTop)
				) {
					const intersectionRatio = getIntersectionRatio(
						nextTop,
						rootHeight,
						box.element.top,
						box.element.height
					)

					entries.push({
						isIntersecting: intersectionRatio > box.threshold,
						intersectionRatio,
						threshold: box.threshold,
						targetId: element.id,
						box,
					})
					break
				}
			}
		})

		if (entries.length > 0) {
			set(entries)
		}
	},
	[] as Entry[]
)

function getIntersectionRatio(
	browserTop: number,
	browserHeight: number,
	elementTop: number,
	elementHeight: number
) {
	const elementBottom = elementTop + elementHeight
	const browserBottom = browserTop + browserHeight

	const top = Math.max(browserTop, elementTop)
	const bottom = Math.min(browserBottom, elementBottom)

	console.log({ top, bottom })

	const percentVisible = Math.max(bottom - top, 0) / elementHeight
	return percentVisible
}

export const isOff = derived([entries], ([$entries], set) => {
	set(true)
	setTimeout(() => {
		set(false)
	}, 250)
})
