import { freqToCanvas } from './utils.js'
import { maxDotRadius } from './constants.js'

export default {
    drawFreq(vcx, cWidth, cHeight, freq, amp) {
        const y = (4 * cHeight) / 5
        const x = freqToCanvas(cWidth, freq)
        vcx.beginPath()
        vcx.arc(x, y, amp * maxDotRadius, 0, Math.PI * 2)
        vcx.closePath()
        vcx.fill()
        vcx.stroke()
    }
}