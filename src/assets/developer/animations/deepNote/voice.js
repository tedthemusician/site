import Synth from './synth.js'
import { randRange, genRandomTargets, mtof } from './utils.js'
import {
    minWaverPitch,
    maxWaverPitch,
    measureDur,
    filterRatio,
} from './constants.js'

export default function Voice(acx, unison, finalPitch, dest) {
    let tone
    function init() {
        const toneSpec = {
            freq: randRange(minWaverPitch, maxWaverPitch),
            dest,
            unison,
        }
        tone = Synth(acx, toneSpec)
    }

    function waver() {
        const targets = genRandomTargets(
            minWaverPitch,
            maxWaverPitch,
            0.3,
            4,
            16,
        )
        targets.forEach(target => {
            tone.eachOsc(osc => {
                osc.frequency.setTargetAtTime(
                    target.value,
                    acx.currentTime + target.offset,
                    3,
                )
            })
            tone.filter.frequency.setTargetAtTime(
                target.value * filterRatio,
                acx.currentTime + target.offset,
                3,
            )
        })
    }

    function spread(destPitch) {
        const destFreq = mtof(destPitch)
        const targetTime = acx.currentTime + 8
        tone.eachOsc(osc => {
            osc.frequency.cancelScheduledValues(acx.currentTime)
            osc.frequency.exponentialRampToValueAtTime(destFreq, targetTime)
        })
        tone.filter.frequency.cancelScheduledValues(acx.currentTime)
        tone.filter.frequency.exponentialRampToValueAtTime(
            Math.min(destFreq * filterRatio, 24000), targetTime,
        )
    }

    init()

    return {
        play() { 
            tone.play()
            waver()
            window.setTimeout(() => spread(finalPitch), measureDur * 1000 * 2.5)
        },
        stop() {
            tone.stop()
            init()
        },
        getFreqs() {
            const freqs = []
            tone.eachOsc(osc => freqs.push(osc.frequency.value))
            return freqs
        },
    }
}