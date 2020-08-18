<template>
    <main :style="wrapperStyle" >
        <canvas ref="canvas" />
    </main>
</template>

<script>
import { pxToRem } from '@/utils.js'
const maxWidth = 40
const widthReduction = 4
const heightReduction = 4

export default {
    props: {
        animation: {
            type: Object,
            required: true,
            validator(anim) {
                const { width, height, play } = anim
                return !!(width && height && play)
            },
        },
    },
    data: () => ({
        wrapperWidth: 0,
        wrapperHeight: 0,
    }),
    computed: {
        width() {
            return this.animation.width
        },
        height() {
            return this.animation.height
        },
        play() {
            return this.animation.play
        },
        aspectRatio() {
            return this.width / this.height
        },
        wrapperStyle() {
            return {
                width: `${this.wrapperWidth}rem`,
                height: `${this.wrapperHeight}rem`,
            }
        },

    },
    methods: {
        onResize() {
            const windowWidth = pxToRem(window.innerWidth)
            const windowHeight = pxToRem(window.innerHeight)
            const defaultWidth = Math.min(windowWidth, maxWidth)
            const defaultHeight = defaultWidth / this.aspectRatio
            let rawWidth
            let rawHeight
            if (defaultHeight <= windowHeight) {
                rawWidth = defaultWidth
                rawHeight = defaultHeight
            } else {
                const widthByWindowHeight = windowHeight * this.aspectRatio
                rawWidth = widthByWindowHeight
                rawHeight = windowHeight
            }
            this.wrapperWidth = rawWidth - widthReduction
            this.wrapperHeight = rawHeight - heightReduction
        },
    },
    mounted() {
        window.addEventListener('resize', this.onResize)
        this.onResize()
        const canvas = this.$refs.canvas
        canvas.width = this.width
        canvas.height = this.height
        const vcx = canvas.getContext('2d')
        this.play({
            vcx,
            cWidth: this.width,
            cHeight: this.height,
        })
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    },
}
</script>

<style scoped>
main {
    margin: 0 auto;
}
canvas {
    width: 100%;
    height: 100%;
    background: black;
}
</style>