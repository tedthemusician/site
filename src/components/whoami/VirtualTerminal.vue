<template>
<main :style="mainStyle">
    <div id="title-bar">
        <span id="title">PreTYY</span>
    </div>
    <div id="screen">
        <pre v-html="content" />
    </div>
</main>
</template>

<script>
import { randRange, pxToRem } from '@/utils.js'
import fullText from '@/assets/whoami/terminalText.txt'

function parseText(rawText) {
    const inputMarker = '$ '
    const lines = rawText.split('\n')
    const commands = []

    let currentCommand

    for (const line of lines) {
        if (line.startsWith(inputMarker)) {
            commands.push({output: []})
            currentCommand = commands.slice(-1)[0]
            currentCommand.input = line.replace(inputMarker, '')
        } else {
            currentCommand.output.push(line)
        }
    }

    return commands
}

const mainMinWidth = 4
const mainMaxWidth = 35

const commandTimeout = 1200
const enterTimeout = 500
const promptTimeout = 400

const prompt = '/home/ted $ '

export default {
    data: () => ({
        text: '',
        mainWidth: 35,
    }),
    computed: {
        content() {
            return `${this.text}&#10074;`
        },
        viewerLink() {
            const url = require('@/assets/whoami/viewer.png')
            return `<a href="${url}" target="_blank">medical image viewer</a>`
        },
        commands() {
            const fullTextWithViewerLink = fullText
                .replace('[viewer-link]', this.viewerLink)
            return parseText(fullTextWithViewerLink)
        },
        mainStyle() {
            return {
                width: `${this.mainWidth}rem`,
            }
        },
    },
    methods: {
        displayNext(remainingCommands) {
            this.text += prompt
            if (remainingCommands.length) {
                window.setTimeout(() => {
                    const { input, output } = remainingCommands[0]
                    this.enterCommand(input, output, () => {
                        this.displayNext(remainingCommands.slice(1))
                    })
                }, commandTimeout)
            }
        },
        enterCommand(input, output, callback) {
            const charTimeout = randRange(50, 150)
            window.setTimeout(() => {
                this.text += input[0]
                if (input.length > 1) {
                    this.enterCommand(input.slice(1), output, callback)
                } else {
                    window.setTimeout(() => {
                        this.text += `<br>${output.join('<br>')}<br>`
                        window.setTimeout(callback, promptTimeout)
                    }, enterTimeout)
                }
            }, charTimeout)
        },
        updateLayout() {
            const width = pxToRem(window.innerWidth) * 0.97
            this.mainWidth = Math.max(Math.min(width, mainMaxWidth), mainMinWidth)
        },
    },
    mounted() {
        window.addEventListener('resize', this.updateLayout)
        this.updateLayout()
        this.displayNext(this.commands)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateLayout)
    },
}
</script>

<style scoped>
main {
    margin: 0.5rem auto;
    min-width: 4rem;
    max-width: 35rem;
    min-height: 34rem;
    background: #002b36;
    border-radius: 0.2rem;
    box-shadow: 0 0 0.3rem #111;
    color: #839496;
}

#title-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 0.9rem;
    background: #666;
    border-top-left-radius: 0.2rem;
    border-top-right-radius: 0.2rem;
    font-size: 0.5rem;
    color: #ccc;
    vertical-align: middle;
}

#screen {
    padding: 0.2rem 0.4rem 0.4rem 0.4rem;
}

pre {
    margin: 0;
    color: #657b83;
    white-space: pre-wrap;
    text-align: left;
    font-family: 'Courier New', monospace;
    font-size: 0.8rem;
    font-weight: bold;
}
</style>