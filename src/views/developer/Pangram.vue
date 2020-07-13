<template>
    <main>
        <input :style="inputStyle" type="text" v-model="typedContent" />
        <div :style="guideStyle" v-text="guideContent" />
    </main>
</template>

<script>
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const placeholders = []

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
input {
    margin: 1rem;
    padding: 0.2rem;
    width: 90%;
    border: 1px solid black;
}
</style>