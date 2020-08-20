import { cWidth, cHeight } from './constants.js'

const numOctaves = 6
const flats = [1, 2, 4, 5, 6]

function getOffset(whiteWidth, octave) {
    return octave * whiteWidth * 7
}

function drawBlackKeys(vcx, whiteWidth, whiteHeight, octave) {
    const blackWidth = whiteWidth * 0.67
    const blackHeight = (3 * whiteHeight) / 5
    const offset = getOffset(whiteWidth, octave)
    vcx.fillStyle = 'black'
    flats.forEach(flat => {
        const center = (flat * whiteWidth) + offset
        const x = center - (blackWidth / 2)
        vcx.fillRect(x, 0, blackWidth, blackHeight)
    })
}

function drawWhiteKeys(vcx, whiteWidth, whiteHeight, octave) {
    const offset = getOffset(whiteWidth, octave)
    for (let i = 0; i < 7; i++) {
        const x = (i * whiteWidth) + offset
        vcx.fillStyle = 'white'
        vcx.strokeStyle = '#bbb'
        vcx.fillRect(x, 0, whiteWidth, whiteHeight)
        vcx.strokeRect(x, 0, whiteWidth, whiteHeight)
    }
}

function drawOctave(vcx, whiteWidth, whiteHeight, octave) {
    drawWhiteKeys(vcx, whiteWidth, whiteHeight, octave)
    drawBlackKeys(vcx, whiteWidth, whiteHeight, octave)
}

export default function drawPiano(vcx) {
    const whiteWidth = cWidth / (numOctaves * 7)
    const whiteHeight = (cHeight * 3) / 5
    for (let i = 0; i <= numOctaves; i++) {
        drawOctave(vcx, whiteWidth, whiteHeight, i)
    }
}