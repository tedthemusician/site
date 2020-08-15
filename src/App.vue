<template>
    <div id="app">
        <nav-bar v-show="!isRootRoute" />
        <router-view id="router-view" :style="routerViewStyle" />
        <global-footer />
    </div>
</template>

<script>
import NavBar from '@/components/app/NavBar.vue'
import GlobalFooter from '@/components/app/GlobalFooter.vue'

export default {
    components: {
        NavBar,
        GlobalFooter,
    },
    computed: {
        isRootRoute() {
            return this.$route.path === '/'
        },
        routerViewStyle() {
            return {
                'margin-top': this.isRootRoute ? 'none' : '2rem',
            }
        },
    },
}
</script>

<style>
html {
    height: 100%;
}

body {
    margin: 0;
    background: linear-gradient(rgb(49, 28, 51), rgb(31, 22, 37) 60vh) fixed;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgb(192, 183, 195);
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1rem;
    text-align: center;
}

#router-view {
    margin-bottom: 2rem;
    padding: 0.5rem;
}

a {
    /* TODO: color, visited, focus, hover, active */
    outline: none;
    text-decoration: none;
}
</style>
