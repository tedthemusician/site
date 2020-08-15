import { randRange, distribution } from './utils.js'

const defaultSpec = {
    freq: 1000,
    amp: 0.1,
    type: 'sawtooth',
    unison: 2,
    dest: null,
}

function createOsc(acx, freq, dest, type = 'sawtooth') {
    const osc = acx.createOscillator()
    osc.type = type
    osc.frequency.value = freq
    osc.connect(dest)
    return osc
}

export default function Synth(acx, userSpec) {
    const { freq, amp, unison, dest } = {
        ...defaultSpec,
        ...userSpec,
    }

    const panPositions = distribution(unison)

    let carriers = [];
    let modulators = [];
    let playables = [];

    const filter = acx.createBiquadFilter()
    filter.Q.value = -1
    filter.connect(dest)

    const gain = acx.createGain()
    gain.gain.value = amp
    gain.connect(filter)

    function init() {
        panPositions.forEach(panPosition => {
            const panner = new PannerNode(acx, {positionX: panPosition})
            panner.connect(gain)
            const carrier = createOsc(acx, freq, panner)
            carriers.push(carrier)
            const modulator = createOsc(acx, randRange(0.4, 0.6), carrier.frequency, 'triangle')
            modulators.push(modulator)
        }) 
        playables = [...carriers, ...modulators]
    }

    init()

    return {
        eachOsc(callback) {
            carriers.forEach(callback)
        },
        filter,
        gain,
        play() {
            playables.forEach(osc => osc.start())
        },
        stop() {
            playables.forEach(osc => osc.stop())
        },
    }
}