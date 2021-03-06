<template>
    <main>
        <div id="canvas-wrapper" :style="canvasStyle">
            <canvas ref="canvas" :style="canvasStyle" />
        </div>
        <div id="controls">
            <div id="sliders">
                <div id="real-input">
                    <div>Real</div>
                    <div>
                        <input
                            id="real-input"
                            type="range"
                            min="-200"
                            max="100"
                            value="0"
                            v-model="real"
                            @input="changeReal"
                        />
                    </div>
                </div>
                <div id="imaginary-input">
                    <div>Imaginary</div>
                    <div>
                        <input
                            type="range"
                            min="-200"
                            max="100"
                            value="0"
                            v-model="imaginary"
                            @input="changeImaginary"
                        />
                    </div>
                </div>
            </div>
            <div id="question">
                <div id="question-start">How quickly does</div>
                <div id="equation">
                    f(z)
                    =
                    z&sup2;
                    {{ realSign }}
                    <span id="real-value" v-text="realText" />
                    {{ imaginarySign }}
                    <span id="imaginary-value" v-text="imaginaryText" />
                    <strong><em>i</em></strong>
                </div>
                <div id="question-end">diverge to infinity?</div>
            </div>
        </div>
    </main>
</template>

<script>
import AutosizeCanvas from '@/mixins/AutosizeCanvas.js'
import animationData from '@/assets/developer/animations/julia/main.js'

const {
    canvasWidth,
    canvasHeight,
    render,
    reset,
    changeReal,
    changeImaginary,
} = animationData

export default {
    mixins: [
        AutosizeCanvas,
    ],
    data: () => ({
        canvasWidth,
        canvasHeight,
        cx: null,
        real: 0,
        imaginary: 0,
    }),
    computed: {
        realSign() {
            return Math.sign(this.real) >= 0 ? '+' : '-'
        },
        imaginarySign() {
            return Math.sign(this.imaginary) >= 0 ? '+' : '-'
        },
        realText() {
            return Math.abs(this.real) / 100
        },
        imaginaryText() {
            return Math.abs(this.imaginary) / 100
        },
    },
    methods: {
        changeReal(event) {
            window.setTimeout(() => changeReal(this.cx, event), 0)
        },
        changeImaginary(event) {
            window.setTimeout(() => changeImaginary(this.cx, event), 0)
        },
    },
    mounted() {
        this.cx = this.$refs.canvas.getContext('2d')
        reset()
        render(this.cx)
    },
}
</script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

#canvas-wrapper {
    margin: 1rem;
}

#controls {
    width: 20rem;
}

#sliders div {
    display: inline-block;
    margin: 0.2rem;
    font-size: 1.2rem;
    border-radius: 0.5rem;
}

#sliders div div {
    margin: 0.5rem;
    display: block;
}

input[type=range] {
    width: 8rem;
}

#real-input {
    color: #0f6;
    background: #063;
}

#imaginary-input {
    color: #fd0;
    background: #760
}

#question {
    font-size: 1.2rem;
}

#question div {
    margin: 0.5rem 0;
}

#equation {
    font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
    font-size: 1.8rem;
    color: #eeeaf0;
}

#real-value {
    font-weight: bold;
    color: #0f6;
}

#imaginary-value {
    font-weight: bold;
    color: #fd0;
}
</style>