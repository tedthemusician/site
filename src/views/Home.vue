<template>
    <div id="container">
        <h1>Ted Oliver</h1>
        <sine-logo width="12rem" v-if="doShowLogo" />
        <div id="links">
            <router-link to="/developer" :style="linkStyle">developer</router-link>
            |
            <router-link to="/musician" :style="linkStyle">musician</router-link>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import SineLogo from '@/components/SineLogo.vue'

export default {
    name: 'Home',
    components: {
        SineLogo,
    },
    computed: {
        ...mapState([
            'theme',
        ]),
        linkStyle() {
            return this.$store.getters.getStyle('links')
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