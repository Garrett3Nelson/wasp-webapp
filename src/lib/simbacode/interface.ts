const strokeRect = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) => {
	x = Math.round(x) + 0.5
	y = Math.round(y) + 0.5
	ctx.strokeRect(x, y, w, h)
}

const drawChatbox = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => {
	let chatY1 = canvas.height - 165
	strokeRect(context, 0, chatY1, 518, 141)

	for (let i = 0; i < 8; i++) {
		strokeRect(context, 10, chatY1 + 14 * i + 8, 483, 13)
	}

	strokeRect(context, 10, chatY1 + 120, 508, 15)

	strokeRect(context, 498, chatY1 + 8, 16, 112)
}

const drawChatButtons = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => {
	let buttonsY1 = canvas.height - 23
	strokeRect(context, 0, buttonsY1, 518, 22)

	for (let i = 0; i < 7; i++) {
		strokeRect(context, 3 + i * 62, buttonsY1, 58, 21)
	}

	strokeRect(context, 436, buttonsY1, 79, 21)
}

const drawGametabs = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => {
	let tabsX1 = canvas.width - 241
	let tabsY1 = canvas.height - 335
	strokeRect(context, tabsX1, tabsY1, 240, 334)

	for (let i = 0; i < 7; i++) {
		strokeRect(context, tabsX1 + 6 + i * 33, tabsY1 + 1, 30, 33)
	}

	for (let i = 0; i < 7; i++) {
		strokeRect(context, tabsX1 + 6 + i * 33, tabsY1 + 298, 30, 33)
	}
}

const drawMinimap = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => {
	let mmX1 = canvas.width - 158
	let mmY1 = 8
	//strokeRect(context, mmX1, mmY1, 151, 151)

	let coords = [
		[0, -76],
		[21, -73],
		[40, -64],
		[56, -51],
		[68, -33],
		[75, -1],
		[68, 31],
		[50, 43],
		[40, 62],
		[21, 71],
		[0, 74],
		[-21, 71],
		[-40, 62],
		[-56, 49],
		[-68, 31],
		[-75, -1],
		[-68, -33],
		[-56, -51],
		[-40, -64],
		[-21, -73]
	]

	const offSetPoly = (pointArray, offset) => {
		let result = []
		pointArray.forEach((e) => result.push([e[0] + offset[0], e[1] + offset[1]]))
		return result
	}

	let mmCenter = [mmX1 + 151 / 2, mmY1 + 151 / 2]

	let finalArr = offSetPoly(coords, mmCenter)

	context.beginPath()
	for (let i = 0; i < finalArr.length; i++) {
		context.moveTo(finalArr[i][0], finalArr[i][1])
		if (i < finalArr.length - 1) {
			context.lineTo(finalArr[i + 1][0], finalArr[i + 1][1])
		} else {
			context.lineTo(finalArr[0][0], finalArr[0][1])
		}
	}
	context.stroke()

	//Compass
	context.beginPath()
	context.arc(mmX1 - 2, mmY1 + 14, 17, 0, 2 * Math.PI)
	context.stroke()

	//xp
	context.beginPath()
	context.arc(mmX1 - 50, mmY1 + 32, 17, 0, 2 * Math.PI)
	context.stroke()

	//hp
	context.beginPath()
	context.arc(mmX1 - 13, mmY1 + 55, 17, 0, 2 * Math.PI)
	context.stroke()

	//prayer
	context.beginPath()
	context.arc(mmX1 - 13, mmY1 + 90, 17, 0, 2 * Math.PI)
	context.stroke()

	//Run
	context.beginPath()
	context.arc(mmX1 - 3, mmY1 + 121, 17, 0, 2 * Math.PI)
	context.stroke()

	//spec
	context.beginPath()
	context.arc(mmX1 + 19, mmY1 + 148, 17, 0, 2 * Math.PI)
	context.stroke()
}

const drawXPBarnUpText = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => {
	strokeRect(context, canvas.width - 359 - 15, 0, 118, 28)
	let w
	if (canvas.width > 900) w = 497
	else w = canvas.width - 359 - 20

	strokeRect(context, 3, 3, w, 18)
}

export const drawInterface = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => {
	context.strokeStyle = "rgb(249 115 22)"
	context.fillStyle = "rgb(249 115 22)"

	drawGametabs(canvas, context)
}