<template>
    <div id="app" :style="rootStyle">
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
        globalStyle() {
            return this.getStyle('app', 'global')
        },
        linkStyle() {
            const rules = this.getStyle('app', 'link')
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
        routerViewStyle() {
            return {
                'margin-top': this.isRootRoute ? 'none' : '2rem',
            }
        },
    },
    methods: {
        getStyle(...keys) {
            return this.$store.getters.getStyle(...keys)
        },
        setBodyBackground() {
            const background = this.getStyle('app', 'body', 'background')
            document.body.style.background = background
        },
    },
    mounted() {
        this.$root.$on('set-theme', this.setBodyBackground)
        this.setBodyBackground()
    },
}
</script>

<style>
html {
    height: 100%;
}

body {
    margin: 0;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#router-view {
    flex: auto;
    padding: 0.5rem;
}

a {
    color: var(--link-normal-color);
    outline: var(--link-outline);
    text-decoration: var(--link-text-decoration);
}
</style>
