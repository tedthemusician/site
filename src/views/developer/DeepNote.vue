<template>
    <div id="container">
        <main id="canvas-wrapper" :style="canvasStyle">
            <canvas ref="canvas" :style="canvasStyle" />
        </main>
        <button @click="togglePlay" v-text="buttonText" />
    </div>
</template>

<script>
import AutosizeCanvas from '@/mixins/AutosizeCanvas.js'
import {
    start,
    pause,
    play,
} from '@/assets/developer/animations/deepNote/main.js'
import render from '@/assets/developer/animations/deepNote/visualizer.js'
import {
    cWidth,
    cHeight,
} from '@/assets/developer/animations/deepNote/constants.js'

export default {
    mixins: [
        AutosizeCanvas,
    ],
    data: () => ({
        canvasWidth: cWidth,
        canvasHeight: cHeight,
        vcx: null,
        acx: null,
        hasStarted: false,
        isPlaying: false,
    }),
    computed: {
        buttonText() {
            if (this.hasStarted) {
                return this.isPlaying ? 'Pause' : 'Resume'
            }
            return 'Start'
        },
    },
    methods: {
        start() {
            start({vcx: this.vcx, acx: this.acx})
            this.hasStarted = true
            this.isPlaying = true
        },
        togglePlay() {
            if (this.hasStarted) {
                if (this.isPlaying) {
                    pause()
                    this.acx.suspend()
                } else {
                    play()
                    this.acx.resume()
                }
                this.isPlaying = !this.isPlaying
            } else {
                this.start()
            }
        },
    },
    mounted() {
        const { canvas } = this.$refs
        this.vcx = canvas.getContext('2d')
        this.acx = new AudioContext()
        render(this.vcx)
    },
    beforeDestroy() {
        this.acx.close()
    },
}
</script>

<style>
main {
    margin: auto;
}

button {
    margin: 1rem auto;
    width: 7rem;
    background: #688;
    color: white;
    border: none;
    border-radius: 0.25rem;
    outline: none;
    font-size: 1.5rem;
    font-weight: bold;
}

button:hover {
    background: #799;
}
</style>