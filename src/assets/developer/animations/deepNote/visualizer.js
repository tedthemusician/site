import dot from './dot.js'
import drawPiano from './piano.js'

function clearCanvas(vcx, cWidth, cHeight) {
    vcx.clearRect(0, 0, cWidth, cHeight)
    vcx.fillStyle = '#658'
    vcx.fillRect(0, 0, cWidth, cHeight)
}

function drawVoices(vcx, cWidth, cHeight, voices, amp) {
    voices.forEach(freq => {
        Object.create(dot).drawFreq(vcx, cWidth, cHeight, freq, amp)
    })
}

export default function render(vcx, cWidth, cHeight, voices, amp) {
    clearCanvas(vcx, cWidth, cHeight)
    drawPiano(vcx, cWidth, cHeight)
    vcx.fillStyle = '#ffe'
    vcx.lineWidth = 0.5
    vcx.strokeStyle = '#ee7'
    drawVoices(vcx, cWidth, cHeight, voices, amp)
}