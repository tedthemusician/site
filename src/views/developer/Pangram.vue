<template>
    <main>
        <textarea
            :class="completionClass"
            v-model="typedContent"
            :placeholder="placeholder"
            rows="5"
        />
        <div
            id="remaining-letters"
            :class="completionClass"
            v-text="guideContent"
        />
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
        completionClass() {
            return this.isPangram ? 'complete' : 'incomplete'
        },
        guideContent() {
            return this.isPangram ? 'Pangram!' : this.remainingLetters.join('')
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
    background: #756;
    color: #ddd;
}

textarea.complete {
    background: #676;
    color: #ded;
}

textarea::placeholder {
    color: #878;
}

#remaining-letters {
    font-size: 1rem;
    font-weight: bold;
}

#remaining-letters.complete {
    color: #8d8;
}

</style>