<template>
    <main :style="wrapperStyle" >
        <div id="box" />
    </main>
</template>

<script>
import { pxToRem } from '@/utils.js'
const maxWidth = 40

export default {
    props: {
        aspectRatio: {
            type: Number,
            default: 16 / 9,
        },
        animationData: {
            type: Object,
            validator: function(data) {
                return !!(data.width && data.height && data.renderFunc)
            },
        },
    },
    data: () => ({
        width: 0,
        height: 0,
        color: 'yellow',
    }),
    computed: {
        wrapperStyle() {
            return {
                width: `calc(${this.width}rem - 4rem)`,
                height: `calc(${this.height}rem - 4rem)`,
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
            if (defaultHeight <= windowHeight) {
                this.width = defaultWidth
                this.height = defaultHeight
            } else {
                const widthByWindowHeight = windowHeight * this.aspectRatio
                this.width = widthByWindowHeight
                this.height = windowHeight
            }
        },
    },
    mounted() {
        window.addEventListener('resize', this.onResize)
        this.onResize()
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
#box {
    width: 100%;
    height: 100%;
    background: red;
}
</style>