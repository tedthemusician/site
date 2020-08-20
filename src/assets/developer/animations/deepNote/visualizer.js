import dot from './dot.js'
import drawPiano from './piano.js'
import { cWidth, cHeight } from './constants.js'

function clearCanvas(vcx) {
    vcx.clearRect(0, 0, cWidth, cHeight)
    vcx.fillStyle = '#658'
    vcx.fillRect(0, 0, cWidth, cHeight)
}

function drawVoices(vcx, voices, amp) {
    voices.forEach(freq => {
        Object.create(dot).drawFreq(vcx, freq, amp)
    })
}

export default function render(vcx, voices = [], amp = 0) {
    clearCanvas(vcx, cWidth, cHeight)
    drawPiano(vcx)
    vcx.fillStyle = '#ffe'
    vcx.lineWidth = 0.5
    vcx.strokeStyle = '#ee7'
    drawVoices(vcx, voices, amp)
}