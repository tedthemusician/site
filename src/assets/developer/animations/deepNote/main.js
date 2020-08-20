import Voice from './voice.js'
import { notes, measureDur } from './constants.js'
import render from './visualizer.js'

let isPlaying = false

export function play() {
    isPlaying = true
}

export function pause() {
    isPlaying = false
}

export function start({ vcx, acx }) {
    isPlaying = true
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
        if (isPlaying) {
            const visualVoices = voices.flatMap(voice => voice.getFreqs())
            render(vcx, visualVoices, masterGain.gain.value)
        }
        window.requestAnimationFrame(draw)
    }

    window.requestAnimationFrame(draw)
    playAll()
}