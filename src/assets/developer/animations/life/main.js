import {
    lineWidth,
    halfLineWidth,
    intervals,
    initialNumDivisions,
    initialSpeed,
    initialGrid,
} from './constants.js'

let numDivisions = initialNumDivisions
let isRunning = false
let speed = initialSpeed

function getCurrentInterval() {
    return intervals[speed]
}

let currentGrid = initialGrid
window.grid = currentGrid

function makeGrid() {
    const cells = []
    for (let rowIndex = 0; rowIndex < numDivisions; rowIndex++) {
        const row = Array(numDivisions).fill(0)
        cells.push(row)
    }
    return cells
}

function changeEachCell(oldCells, callback) {
    const newCells = makeGrid()
    for (let row = 0; row < numDivisions; row++) {
        for (let col = 0; col < numDivisions; col++) {
            const val = oldCells[row][col]
            newCells[row][col] = callback(oldCells, col, row, val)
        }
    }
    return newCells
}

export function setGridSize(newNumDivisions) {
    const difference = newNumDivisions - numDivisions
    numDivisions += difference
}

function setCell(col, row, val) {
    const maxIndex = numDivisions - 1
    const boundedCol = Math.min(col, maxIndex)
    const boundedRow = Math.min(row, maxIndex)
    currentGrid[boundedRow][boundedCol] = val
}

function flipCell(col, row) {
    setCell(col, row, 1 - currentGrid[row][col])
}

function getNumLivingNeighbors(cells, col, row) {
    const rowAbove  = row === 0 ? numDivisions - 1 : row - 1
    const colToLeft = col === 0 ? numDivisions - 1 : col - 1
    const rowBelow   = (row + 1) % numDivisions
    const colToRight = (col + 1) % numDivisions
    return cells[rowAbove][colToLeft]
        + cells[rowAbove][col]
        + cells[rowAbove][colToRight]
        + cells[row][colToLeft]
        + cells[row][colToRight]
        + cells[rowBelow][colToLeft]
        + cells[rowBelow][col]
        + cells[rowBelow][colToRight]
}

function getNextCellState(cells, col, row) {
    const numLivingNeighbors = getNumLivingNeighbors(cells, col, row)
    if (numLivingNeighbors === 3) {
        return 1
    } else if (cells[row][col] && numLivingNeighbors === 2) {
        return 1
    }
    return 0
}

function getNextGridState(oldCells) {
    return changeEachCell(oldCells, getNextCellState)
}

export function updateGrid() {
    currentGrid = getNextGridState(currentGrid)
}

export function invertGrid() {
    currentGrid = changeEachCell(currentGrid, (cells, row, col, val) => 1 - val)
}

export function clearGrid() {
    currentGrid = makeGrid()
}

function getIsRunning() {
    return isRunning
}

export function setIsRunning(newState) {
    isRunning = newState
}

export function setSpeed(newSpeed) {
    speed = newSpeed
}

const cSideLength = 800
export const sideLength = cSideLength

export function render({ canvas, cx }) {

    const getCellWidth = () => cSideLength / numDivisions
    const getCellHeight = () => cSideLength / numDivisions

    const canvasToCell = (x, y) => ({
        col: ((x / cSideLength)  * numDivisions) | 0,
        row: ((y / cSideLength) * numDivisions) | 0,
    })

    const eventToCell = e => canvasToCell(e.offsetX, e.offsetY)

    const cellToCanvas = (col, row) => {
        return {
            x: (col * cSideLength) / numDivisions,
            y: (row * cSideLength) / numDivisions,
        }
    }

    let mouseMoveListener = null
    let cellsHaveChanged = 0

    function drawBG() {
        cx.fillStyle = '#cba'
        cx.fillRect(0, 0, cSideLength, cSideLength)
        cx.strokeStyle = '#ba9'
        cx.lineWidth = lineWidth
        for (let x = 0; x <= numDivisions; x++) {
            cx.beginPath()
            const xCanvas = (x * cSideLength) / numDivisions
            cx.moveTo(xCanvas, 0)
            cx.lineTo(xCanvas, cSideLength)
            cx.closePath()
            cx.stroke()
        }
        for (let y = 0; y <= numDivisions; y++) {
            cx.beginPath()
            const yCanvas = (y * cSideLength) / numDivisions
            cx.moveTo(0, yCanvas)
            cx.lineTo(cSideLength, yCanvas)
            cx.closePath()
            cx.stroke()
        }
    }

    function drawLivingCell(col, row) {
        const { x, y } = cellToCanvas(col, row)
        cx.fillRect(
            x + halfLineWidth,
            y + halfLineWidth,
            getCellWidth() - lineWidth,
            getCellHeight() - lineWidth,
        )
    }

    function drawLivingCells() {
        cx.fillStyle = '#95a'
        currentGrid.forEach((cols, row) => {
            cols.forEach((val, col) => {
                if (val) {
                    drawLivingCell(col, row)
                }
            })
        })
    }

    canvas.addEventListener('mousedown', e => {
        if (getIsRunning()) {
            return
        }
        const { col, row } = eventToCell(e)
        const newVal = 1 - currentGrid[row][col]
        mouseMoveListener = e => {
            cellsHaveChanged = true
            const { col, row } = eventToCell(e)
            setCell(col, row, newVal)
        }
        canvas.addEventListener('mousemove', mouseMoveListener)
    })

    canvas.addEventListener('mouseup', e => {
        if (getIsRunning()) {
            return
        }
        if (!cellsHaveChanged) {
            const { col, row } = eventToCell(e)
            flipCell(col, row)
        }
    })

    window.addEventListener('mouseup', () => {
        if (getIsRunning()) {
            return
        }
        canvas.removeEventListener('mousemove', mouseMoveListener)
        cellsHaveChanged = false
    })

    let lastChangeTimestamp = 0

    function draw(timestamp) {
        if (getIsRunning()) {
            const dt = timestamp - lastChangeTimestamp
            if (dt > getCurrentInterval()) {
                lastChangeTimestamp = timestamp
                updateGrid()
            }
        }
        drawBG()
        drawLivingCells()
        window.requestAnimationFrame(draw)
    }

    window.requestAnimationFrame(draw)

    window.addEventListener('keydown', e => {
        if (e.key === ' ') {
            updateGrid()
        }
    })
}
