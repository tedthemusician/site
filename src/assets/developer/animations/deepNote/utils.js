import { cWidth, minNote, maxNote } from './constants.js'

export function randRange(lo, hi) {
    return (Math.random() * (hi - lo)) + lo
}

export function genRandomTargets(lo, hi, minDur, maxDur, totalDur) {
    const points = []
    let offset = 0
    while (offset < totalDur) {
        points.push({
            value: randRange(lo, hi),
            offset,
        })
        offset += randRange(minDur, maxDur)
    }
    points[points.length - 1].offset = totalDur
    return points
}

export function mtof(m) {
    return Math.pow(2, ((m - 69) / 12)) * 440
}

function ftom(f) {
    return 69 + (12 * (Math.log2(f / 440)))
}

export function freqToCanvas(freq) {
    const numNotes = maxNote - minNote
    const noteOffset = cWidth / numNotes
    const minX = noteOffset
    const maxX = cWidth - noteOffset
    const rawPos = (ftom(freq) - minNote) / numNotes
    const xShift = minX / 2
    return (rawPos * maxX) + xShift
}

export function distribution(len) {
    const elems = []
    if (len === 1) {
        return [0.5]
    }
    for (let i = 0; i < len; i++) {
        elems.push(i / (len - 1))
    }
    return elems
}