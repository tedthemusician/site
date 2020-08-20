import { numStepsToInfinity } from './math.js'

const cWidth = 800
const cHeight = 600

const hCenter = Math.floor(cWidth / 2)
const vCenter = Math.floor(cHeight / 2)

const zoom = 200

const params = {
    real: 0,
    imaginary: 0,
}

const numBytesPerPixel = 4
const numBytesPerRow = cWidth * 4

const maxIterations = 50

function canvasToPlot(x, y) {
    return {
        x: (x - hCenter) / zoom,
        y: (y - vCenter) / zoom,
    }
}

function convertRawRGB(v) {
    return Math.round((1 - Math.max(Math.min(v, 4 - v, 1), 0)) * 255)
}

const hues = []
for (let i = 0; i < 256; i++) {
    const hue = i / 255
    const kr = (5 + (hue * 6)) % 6
    const kg = (3 + (hue * 6)) % 6
    const kb = (1 + (hue * 6)) % 6
    const r = convertRawRGB(kr)
    const g = convertRawRGB(kg)
    const b = convertRawRGB(kb)
    hues[i] = { r, g, b }
}

const getRGB = h => hues[Math.round(h * hues.length)]

function render(cx) {
    const imageData = cx.getImageData(0, 0, cWidth, cHeight)
    for (let i = 0; i < imageData.data.length; i += 4) {
        const canvasX = (i % numBytesPerRow) / numBytesPerPixel
        const canvasY = Math.floor(i / numBytesPerRow)
        const { x, y } = canvasToPlot(canvasX, canvasY)
        let rgb = {r: 0, g: 0, b: 0}
        const numSteps = numStepsToInfinity(x, y, params.real, params.imaginary)

        if (numSteps !== null) {
            rgb = getRGB(1 - (numSteps / maxIterations))
        }

        const { r, g, b } = rgb
        imageData.data[i]     = r
        imageData.data[i + 1] = g
        imageData.data[i + 2] = b
        imageData.data[i + 3] = 255
    }

    cx.putImageData(imageData, 0, 0)
}

function makeParamChanger(param) {
    return function(cx, event) {
        params[param] = parseInt(event.target.value, 10) / 100
        render(cx)
    }
}

const changeReal = makeParamChanger('real')
const changeImaginary = makeParamChanger('imaginary')

export default {
    canvasWidth: cWidth,
    canvasHeight: cHeight,
    render,
    changeReal,
    changeImaginary,
}