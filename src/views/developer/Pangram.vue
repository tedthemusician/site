<template>
    <main>
        <textarea
            :style="inputStyle"
            v-model="typedContent"
            :placeholder="placeholder"
            rows="5"
        />
        <div id="remaining-letters" :style="guideStyle" v-text="guideContent" />
    </main>
</template>

<script>
import { randInt } from '@/utils.js'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const placeholders = [
    'John Adams would be quite vexed by frozen packaged meals.',
    'Before quantum physics, Max Planck just saw waves and zig-zags.',
    'Some brazen quack expert knowingly bluffed the twelve jurors.',
    'Tough zoning laws require space for living, day jobs, parks, and mixed use.',
    'Quality chewy franks, zesty roasted veal, Mexican jumping beans',
]

export default {
    data: () => ({
        placeholders,
        typedContent: '',
    }),
    computed: {
        remainingLetters() {
            return alphabet.filter(char => (
                !this.typedContent.toUpperCase().includes(char)
            ))
        },
        placeholder() {
            return placeholders[randInt(0, placeholders.length - 1)]
        },
        isPangram() {
            return !this.remainingLetters.length
        },
        guideContent() {
            return this.isPangram ? 'Pangram!' : this.remainingLetters.join('')
        },
        inputStyle() {
            return this.getPangramStyle('input')
        },
        guideStyle() {
            return this.getPangramStyle('guide')
        },
    },
    methods: {
        getPangramStyle(element) {
            const status = this.isPangram ? 'complete' : 'incomplete'
            return this.$store.getters.getStyle('pangram', status, element)
        },
    },
}
</script>

<style>
textarea {
    margin: 1rem;
    width: 90%;
    border: 1px solid black;
    resize: none;
}

textarea::placeholder {
    color: #888;
}

#remaining-letters {
    font-size: 1rem;
    /* font-family: 'Courier New', monospace; */
    font-weight: bold;
}

</style>