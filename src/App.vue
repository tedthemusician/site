<template>
    <div id="app" :style="rootStyle">
        <router-view/>
        <global-footer />
    </div>
</template>

<script>
import { mapState } from 'vuex'

import GlobalFooter from '@/components/GlobalFooter.vue'

export default {
    data: () => ({
    }),
    computed: {
        ...mapState({
            rootStyle: state => state.theme.global,
        }),
    },
    components: {
        GlobalFooter,
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
