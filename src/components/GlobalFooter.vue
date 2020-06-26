<template>
    <footer :style="footerStyle">
        <a @click="setTheme('light')">light</a>
        |
        <a @click="setTheme('dark')">dark</a>
        |
        <a @click="setTheme('vintage')">vintage</a>
        |
        <a @click="setTheme('greybeard')">greybeard</a>
    </footer>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    computed: mapState({
        footerStyle: state => state.theme.soft,
    }),
    methods: {
        ...mapMutations([
            'setTheme',
        ]),
    },
}
</script>