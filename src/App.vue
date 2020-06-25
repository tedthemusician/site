<template>
    <div id="app" :style="rootStyle">
        <router-view/>
        <Footer />
    </div>
</template>

<script>
import { mapState } from 'vuex'

import themes from '@/styles/themes.js'

import Footer from '@/components/Footer.vue'

export default {
    data: () => ({
    }),
    computed: {
        ...mapState({
            rootStyle: state => themes[state.theme].global,
        }),
    },
    components: {
        Footer,
    },
}
</script>

<style>
html {
    height: 100%;
}

body {
    margin: 0;
    height: 100%;
}

#app {
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

footer {
    position: fixed;
    bottom: 0;

    width: 100%;
    height: 2rem;
}

</style>
