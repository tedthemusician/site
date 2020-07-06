export function randRange(low, high) {
    const difference = high - low
    return (Math.random() * difference) + low
}