<template>
    <div id="container">
        <home-header />
        <sine-logo width="12rem" v-if="doShowLogo" />
        <div id="links">
            <div id="showcases">
                <router-link to="/developer">developer</router-link>
                |
                <router-link to="/musician">musician</router-link>
            </div>
            <div id="whoami" :style="whoamiStyle">
            <router-link to="/whoami">whoami</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import HomeHeader from '@/components/HomeHeader.vue'
import SineLogo from '@/components/SineLogo.vue'

export default {
    name: 'Home',
    components: {
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
        doShowLogo() {
            return this.theme !== 'greybeard'
        },
    },
}
</script>

<style scoped>
#links {
    margin-top: 1rem;
    font-size: 1.25rem;
}
</style>