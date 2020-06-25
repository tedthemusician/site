<template>
    <div id="app" :style="rootStyle">
        <router-view/>
    </div>
</template>

<script>
import themes from '@/styles/themes.js'

export default {
    data: () => ({
        themes,
        currentTheme: 'dark',
    }),
    computed: {
        rootStyle() {
            return this.themes[this.currentTheme].global
        },
    }
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

</style>
