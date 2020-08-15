<template>
    <main :style="wrapperStyle" >
        <canvas ref="canvas" :width="wrapperWidth" :height="wrapperHeight" />
    </main>
</template>

<script>
import { pxToRem, remToPx } from '@/utils.js'
const maxWidth = 40
const widthReduction = 4
const heightReduction = 4

export default {
    props: {
        width: {
            type: Number,
            default: 16,
        },
        height: {
            type: Number,
            default: 16,
        },
        play: {
            type: Function,
            required: true,
        },
    },
    data: () => ({
        wrapperWidth: 0,
        wrapperHeight: 0,
        color: 'yellow',
    }),
    computed: {
        aspectRatio() {
            return this.width / this.height
        },
        wrapperStyle() {
            return {
                width: `${this.wrapperWidth}px`,
                height: `${this.wrapperHeight}px`,
                background: this.color,
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
            this.wrapperWidth = remToPx(rawWidth - widthReduction)
            this.wrapperHeight = remToPx(rawHeight - heightReduction)
        },
    },
    mounted() {
        window.addEventListener('resize', this.onResize)
        this.onResize()
        const canvas = this.$refs.canvas
        const vcx = canvas.getContext('2d')
        this.play({
            vcx,
            width: this.wrapperWidth,
            height: this.wrapperHeight,
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