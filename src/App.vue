<template>
    <div id="app" :style="rootStyle">
        <nav-bar />
        <router-view/>
        <global-footer />
    </div>
</template>

<script>
import NavBar from '@/components/app/NavBar.vue'
import GlobalFooter from '@/components/app/GlobalFooter.vue'

export default {
    computed: {
        globalStyle() {
            return this.$store.getters.getStyle('app', 'global')
        },
        linkStyle() {
            const rules = this.$store.getters.getStyle('app', 'link')
            const { normal } = rules
            return {
                '--link-normal-color': normal.color,
                '--link-outline': normal.outline,
                '--link-text-decoration': normal['text-decoration'],
            }
        },
        rootStyle() {
            return {
                ...this.globalStyle,
                ...this.linkStyle,
            }
        },
    },
    components: {
        NavBar,
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

a {
    color: var(--link-normal-color);
    outline: var(--link-outline);
    text-decoration: var(--link-text-decoration);
}

footer {
    position: fixed;
    bottom: 0;

    width: 100%;
    height: 2rem;
}

</style>
