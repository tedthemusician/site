export function randRange(low, high) {
    const difference = high - low
    return (Math.random() * difference) + low
}

export function pxToRem(px) {
    return px / parseFloat(getComputedStyle(document.documentElement).fontSize)
}