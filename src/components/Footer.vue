<template>
    <footer>
        <a id="light" @click="setTheme('light')">light</a>
        |
        <a id="dark" @click="setTheme('dark')">dark</a>
        |
        <a id="nineties" @click="setTheme('nineties')">nineties</a>
        |
        <a id="greybeard" @click="setTheme('greybeard')">greybeard</a>
    </footer>
</template>

<script>
import { mapMutations } from 'vuex'

import store from '@/store/index.js'

export default {
    store,
    methods: {
        ...mapMutations([
            'setTheme',
        ]),
    },
}
</script>

<style>

</style>