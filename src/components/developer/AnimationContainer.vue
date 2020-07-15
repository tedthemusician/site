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
    },
    data: () => ({
        width: 0,
        height: 0,
        color: 'yellow',
    }),
    computed: {
        wrapperStyle() {
            return {
                width: `calc(${this.width}rem - 1rem)`,
                height: `calc(${this.height}rem - 1rem)`,
                background: this.color,
            }
        },
    },
    methods: {
        onResize() {
            const { offsetWidth, offsetHeight } = this.$parent.$el
            const parentWidth = pxToRem(offsetWidth)
            const parentHeight = pxToRem(offsetHeight)
            const defaultWidth = Math.min(parentWidth, maxWidth)
            const defaultHeight = defaultWidth / this.aspectRatio
            if (defaultHeight <= parentHeight) {
                this.width = defaultWidth
                this.height = defaultHeight
            } else {
                const widthByParentHeight = parentHeight * this.aspectRatio
                this.width = widthByParentHeight
                this.height = parentHeight
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