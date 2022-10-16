// things that don't change go into settings
type Settings = {
	browserHeight: number
	pageHeight: number
	boxWidth: number
	elements: Element[]
}
type Element = {
	top: number
	width: number
	height: number
	left: number
	id: string
}

type Margin = {
	top: number
	bottom: number
}

export type Box = {
	id: string
	element: Element
	threshold: number
	top: number
	left: number
	width: number
	height: number
	disabled: boolean
	// refactor
	opacity: number
	textAlign: 'end' | 'start'
}

export function getBoxes(
	thresholds: number[],
	margin: Margin,
	settings: Settings
): Box[] {
	return settings.elements.flatMap((element) =>
		getElementBoxes(element, thresholds, margin, settings)
	)
}

function getElementBoxes(
	element: Element,
	thresholds: number[],
	margin: Margin,
	settings: Settings
): Box[] {
	const boxes = [] as Box[]

	thresholds.forEach((t, i) => {
		boxes.push(getBox(element, i, thresholds, margin, 'top', settings))
		boxes.push(getBox(element, i, thresholds, margin, 'bottom', settings))
	})

	return boxes
}

function getBox(
	element: Element,
	index: number,
	thresholds: number[],
	margin: Margin,
	align: 'top' | 'bottom',
	settings: Settings
) {
	const { browserHeight, pageHeight, boxWidth } = settings
	const threshold = thresholds[index]
	const frameHeight = browserHeight - margin.top - margin.bottom
	const boxCount = thresholds.length * 2

	let top: number, n: number
	if (align === 'top') {
		top = element.top + threshold * element.height - frameHeight
		n = index
	} else {
		top = element.top + (1 - threshold) * element.height
		n = boxCount - 1 - index
	}

	const firstLeft = element.left + boxWidth * 1.5
	const lastLeft = element.left + element.width - boxWidth * 1.5
	const left = firstLeft + (lastLeft - firstLeft) * (n / (boxCount - 1))

	const isAbove = top < margin.top
	const isBelow = top + frameHeight > pageHeight - margin.bottom
	const isBiggerThanFrame = element.height * threshold > frameHeight
	const disabled = isAbove || isBelow || isBiggerThanFrame
	return {
		id: `${element.id}-${align}-${index}`,
		element,
		threshold,
		top,
		left,
		width: boxWidth,
		height: frameHeight,
		disabled,
		opacity: disabled ? 0.2 : 0.8,
		textAlign: align === 'top' ? ('end' as const) : ('start' as const),
	}
}
