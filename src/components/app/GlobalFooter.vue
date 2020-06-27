<template>
    <footer :style="footerStyle">
        <a @click="setTheme('light')">light</a>
        |
        <a @click="setTheme('dark')">dark</a>
        |
        <a @click="setTheme('vintage')">vintage</a>
        |
        <a @click="setTheme('greybeard')">greybeard</a>
    </footer>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    computed: {
        footerStyle() {
            return this.$store.getters.getStyle('soft') 
        },
    },
    methods: {
        ...mapActions([
            'setTheme',
        ]),
    },
}
</script>

<style scoped>
a {
    cursor: pointer;
}
</style>