import Voice from './voice.js'
import { measureDur } from './constants.js'
import render from './visualizer.js'

function play({ vcx, acx, cWidth, cHeight }) {
    const notes = [
        {pitch: 26, unison: 1},
        {pitch: 38, unison: 2},
        {pitch: 50, unison: 3},
        {pitch: 57, unison: 3},
        {pitch: 62, unison: 3},
        {pitch: 69, unison: 3},
        {pitch: 74, unison: 3},
        {pitch: 78, unison: 3},
        {pitch: 81, unison: 3},
        {pitch: 86, unison: 3},
        {pitch: 90, unison: 3},
        {pitch: 93, unison: 3},
    ]

    const gainEnv = [0, 0.5, 1, 1, 0]

    const masterGain = acx.createGain()
    masterGain.gain.value = 0
    masterGain.connect(acx.destination)

    const voices = []
    notes.forEach(note => {
        voices.push(Voice(acx, note.unison, note.pitch, masterGain))
    })

    function playAll() {
        masterGain.gain.setValueCurveAtTime(gainEnv, acx.currentTime, measureDur * 8)
        voices.forEach(voice => voice.play())
    }

    function draw() {
        const visualVoices = voices.flatMap(voice => voice.getFreqs())
        render(vcx, cWidth, cHeight, visualVoices, masterGain.gain.value)
        window.requestAnimationFrame(draw)
    }

    window.requestAnimationFrame(draw)
    playAll()
}