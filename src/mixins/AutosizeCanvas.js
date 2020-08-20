import { pxToRem, remToPx } from '@/utils.js'

export default {
    data: () => ({
        canvasWidth: 0,
        canvasHeight: 0,
        wrapperWidth: 0,
        wrapperHeight: 0,
        maxWidth: 40,
    }),
    computed: {
        aspectRatio() {
            return this.canvasWidth / this.canvasHeight
        },
        canvasStyle() {
            return {
                width: `${this.wrapperWidth}px`,
                height: `${this.wrapperHeight}px`,
            }
        },
    },
    methods: {
        computeLayout() {
            const windowWidth = pxToRem(window.innerWidth)
            const width = Math.min(windowWidth, this.maxWidth)
            const height = width / this.aspectRatio
            this.wrapperWidth = remToPx(width - 1)
            this.wrapperHeight = remToPx(height - 1)
        },
    },
    mounted() {
        window.addEventListener('resize', this.computeLayout)
        this.computeLayout()
        const { canvas } = this.$refs
        canvas.width = this.canvasWidth
        canvas.height = this.canvasHeight
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.computeLayout)
    },
}