<template>
    <main>
        <canvas ref="canvas" />
        <div id="sliders">
            <input
                type="range"
                min="-100"
                max="100"
                value="0"
                @change="changeReal"
            />
            <input
                type="range"
                min="-100"
                max="100"
                value="0"
                @change="changeImaginary"
            />
        </div>
    </main>
</template>

<script>
import animationData from '@/assets/developer/animations/julia/main.js'
const {
    width,
    height,
    render,
    changeReal,
    changeImaginary,
} = animationData

export default {
    data: () => ({
        cx: null,
    }),
    methods: {
        changeReal(event) {
            window.setTimeout(() => changeReal(this.cx, event), 0)
        },
        changeImaginary(event) {
            window.setTimeout(() => changeImaginary(this.cx, event), 0)
        },
    },
    mounted() {
        const { canvas } = this.$refs
        canvas.width = width
        canvas.height = height
        this.cx = canvas.getContext('2d')
        render(this.cx)
    },
}
</script>

<style scoped>
canvas {
    width: 20rem;
    height: 15rem;
}
</style>