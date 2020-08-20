<template>
    <div id="container">
        <main>
            <div id="canvas-wrapper" :style="canvasStyle">
                <canvas :style="canvasStyle" ref="canvas" />
            </div>
        </main>
        <div id="buttons">
            <div id="go-buttons">
                <button
                    class="run-toggle"
                    v-if="isRunning"
                    @click="setIsRunning(false)"
                >
                    Stop
                </button>
                <button
                    class="run-toggle"
                    v-else
                    @click="setIsRunning(true)"
                >
                    Run
                </button>
                <button :disabled="isRunning" @click="step">Step</button>
            </div>
            <div id="size-buttons">
                <button
                    :disabled="isRunning || numDivisions >= maxDivisions"
                    @click="enlarge"
                >
                    More
                </button>
                <button
                    :disabled="isRunning || numDivisions <= minDivisions"
                    @click="shrink"
                >
                    Fewer
                </button>
            </div>
            <div id="change-buttons">
                <button :disabled="isRunning" @click="invert">Invert</button>
                <button :disabled="isRunning" @click="clear">Clear</button>
            </div>
        </div>
        <div id="speed">
            <div>Speed</div>
            <input
                type="range"
                min="0"
                :max="maxSpeed"
                :value="speed"
                @input="setSpeed"
            />
        </div>
    </div>
</template>

<script>
import AutosizeCanvas from '@/mixins/AutosizeCanvas.js'

import {
    numIntervals,
    initialNumDivisions,
    initialSpeed,
    minDivisions,
    maxDivisions,
} from '@/assets/developer/animations/life/constants.js'

import {
    render,
    setSpeed,
    sideLength,
    clearGrid,
    invertGrid,
    updateGrid,
    setGridSize,
    setIsRunning,
} from '@/assets/developer/animations/life/main.js'

export default {
    mixins: [
        AutosizeCanvas,
    ],
    data: () => ({
        numIntervals,
        minDivisions,
        maxDivisions,
        isRunning: false,
        speed: initialSpeed,
        numDivisions: initialNumDivisions,
        minSpeed: 0,
        canvasWidth: sideLength,
        canvasHeight: sideLength,
    }),
    computed: {
        maxSpeed() {
            return this.numIntervals - 1
        },
        aspectRatio() {
            return this.canvasWidth / this.canvasHeight
        },
    },
    methods: {
        clear(e) {
            clearGrid()
            e.target.blur()
        },
        invert(e) {
            invertGrid()
            e.target.blur()
        },
        step() {
            updateGrid()
        },
        shrink() {
            if (this.numDivisions > this.minDivisions) {
                this.numDivisions--
                setGridSize(this.numDivisions)
            }
        },
        enlarge() {
            if (this.numDivisions < this.maxDivisions) {
                this.numDivisions++
                setGridSize(this.numDivisions)
            }
        },
        setSpeed(event) {
            this.speed = parseInt(event.target.value, 10)
            setSpeed(this.speed)
        },
        setIsRunning(newState) {
            setIsRunning(newState)
            this.isRunning = newState
        },
    },
    mounted() {
        const { canvas } = this.$refs
        const cx = canvas.getContext('2d')
        render({
            canvas,
            cx,
        })
    },
}
</script>

<style scoped>
main {
    margin: 1rem auto;
    text-align: center;
}

#canvas-wrapper {
    margin: auto;
}

#buttons {
    display: table;
    margin: auto;
}

#buttons div {
    display: table-row;
}

button {
    display: table-cell;
    width: 5rem;
    margin: 0.1rem;
    padding: 0.5rem;
    background: #688;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 0.25rem;
    outline: none;
    user-select: none;
}

button:hover {
    background: #799;
}

button:disabled {
    background: rgb(124, 145, 145);
    color: #dee;
    cursor: not-allowed;
}

#speed {
    margin: 0.5rem auto;
    padding: 0.35rem 0.15rem;
    width: 10rem;
    background: rgb(85, 78, 68);
    font-weight: bold;
    border-radius: 0.25rem;
    user-select: none;
}

#speed input {
    margin-top: 0.25rem;
}

</style>