<template>
    <main>
        <sine-logo width="12rem" v-if="theme !== 'greybeard'" />
        <home-header />
        <div id="links">
            <animated-gifs v-if="theme === 'vintage'" />
            <div id="showcases">
                <router-link to="/developer">developer</router-link>
                |
                <router-link to="/musician">musician</router-link>
            </div>
            <div id="whoami" :style="whoamiStyle">
            <router-link to="/whoami">whoami</router-link>
            </div>
        </div>
    </main>
</template>

<script>
import { mapState } from 'vuex'

import AnimatedGifs from '@/components/home/AnimatedGifs.vue'
import HomeHeader from '@/components/home/HomeHeader.vue'
import SineLogo from '@/components/home/SineLogo.vue'

export default {
    name: 'Home',
    components: {
        AnimatedGifs,
        HomeHeader,
        SineLogo,
    },
    computed: {
        ...mapState([
            'theme',
        ]),
        whoamiStyle() {
            return this.$store.getters.getStyle('home', 'whoami')
        },
    },
}
</script>

<style scoped>
main {
    margin-top: 2rem;
}

#links {
    margin-top: 1rem;
    font-size: 1.25rem;
    user-select: none;
}
</style>