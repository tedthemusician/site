<template>
    <main>
        <canvas ref="canvas" />
    </main>
</template>

<script>
export default {
    mounted() {
        const cWidth = 400
        const cHeight = 400
        const hCenter = cWidth / 2
        const vCenter = cHeight / 2
        const { canvas } = this.$refs
        canvas.width = cWidth
        canvas.height = cHeight
        const cx = canvas.getContext('2d')
        cx.fillStyle = 'white'
        cx.fillRect(0, 0, hCenter, vCenter)
        cx.fillRect(hCenter, vCenter, hCenter, vCenter)
        cx.fillStyle = 'red'
        cx.fillRect(0, vCenter, hCenter, vCenter)
        cx.fillRect(hCenter, 0, hCenter, vCenter)
        cx.font = '3rem Helvetica'
        cx.fillStyle = 'blue'
        cx.fillText('ABCDEFG', 10, 50)
        window.setTimeout(() => {
            canvas.style.width = '10rem'
            canvas.style.height = '5rem'
        }, 2000)
        window.setTimeout(() => {
            canvas.style.width = '7rem'
            canvas.style.height = '50rem'
        }, 4000)
    },
}
</script>

<style scoped>
canvas {
    width: 40rem;
    height: 25rem;
    background: black;
}
</style>