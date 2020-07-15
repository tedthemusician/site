<template>
    <nav :style="barStyle">
        <back-button v-if="theme !== 'greybeard'" @click.native="goBack" />
        <a id="home-link" v-if="theme === 'greybeard'" @click="goHome">
            Home
        </a>
        <home-button v-else @click.native="goHome" />
    </nav>
</template>

<script>
import { mapState } from 'vuex'

import HomeButton from './HomeButton.vue'
import BackButton from './BackButton.vue'

export default {
    components: {
        HomeButton,
        BackButton,
    },
    computed: {
        ...mapState([
            'theme',
        ]),
        barStyle() {
            return this.$store.getters.getStyle('app', 'navBar')
        },
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        },
        goHome() {
            this.$router.push('/')
        },
    },
}
</script>

<style scoped>
nav {
    position: fixed;
    top: 0;
}

a {
    margin: 0.5rem;
    color: blue;
}
</style>