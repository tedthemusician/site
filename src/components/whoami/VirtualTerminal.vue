<template>
<main :style="windowStyle">
    <div id="title-bar" :style="titleBarStyle">
        <span id="title">PreTYY</span>
    </div>
    <div id="screen" :style="screenStyle">
        <pre :style="preStyle" v-html="content" />
    </div>
</main>
</template>

<script>
import { randRange } from '@/utils.js'
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

const commandTimeout = 1200
const enterTimeout = 500
const promptTimeout = 400

const prompt = '/home/ted $ '

export default {
    data: () => ({
        text: '',
        commands: parseText(fullText),
    }),
    computed: {
        windowStyle() {
            return this.$store.getters.getStyle('whoami', 'window')
        },
        titleBarStyle() {
            return this.$store.getters.getStyle('whoami', 'titleBar')
        },
        screenStyle() {
            return this.$store.getters.getStyle('whoami', 'screen')
        },
        preStyle() {
            return this.$store.getters.getStyle('whoami', 'pre')
        },
        content() {
            return `${this.text}&#10074;`
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
    },
    mounted() {
        this.displayNext(this.commands)
    },
}
</script>

<style scoped>
</style>