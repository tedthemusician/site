export function randRange(low, high) {
    const difference = high - low
    return (Math.random() * difference) + low
}

export function randInt(low, high) {
    return Math.round(randRange(low, high))
}

export function pxToRem(px) {
    return px / parseFloat(getComputedStyle(document.documentElement).fontSize)
}

export function remToPx(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
}