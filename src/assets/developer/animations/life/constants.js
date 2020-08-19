export const lineWidth = 2
export const halfLineWidth = lineWidth / 2

export const minDivisions = 5
export const maxDivisions = 30

export const numIntervals = 11
export const intervals = []
let nextInterval = 20
for (let i = 0; i < numIntervals; i++) {
    intervals.unshift(nextInterval)
    nextInterval *= 1.5
}

export const initialNumDivisions = 17
export const initialSpeed = 4

export const initialGrid = [
    [0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0],
    [0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0],
    [0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0],
    [0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0],
    [0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0],
    [1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1],
    [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1],
    [1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1],
    [0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0],
    [0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0],
    [0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0],
    [0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0],
    [0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0],
]