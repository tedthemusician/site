export function numStepsToInfinity(startX, startY, real, imaginary) {
    let currentX = startX
    let currentY = startY
    for (let i = 0; i < 50; i++) {
        const squaredR = (currentX ** 2) - (currentY ** 2)
        const squaredI = (currentX * currentY) * 2
        currentX = squaredR + real
        currentY = squaredI + imaginary
        if (!Number.isFinite(Math.sqrt(currentX ** 2, currentY ** 2))) {
            return i
        }
    }
    return null
}