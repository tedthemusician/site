<template>
    <footer :style="footerStyle">
        Copyright &copy; 2020 Ted Oliver
    </footer>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    computed: {
        footerStyle() {
            return this.$store.getters.getStyle('app', 'footer')
        },
    },
    methods: {
        ...mapActions({
            setStoreTheme: 'setTheme',
        }),
        setTheme(theme) {
            this.setStoreTheme(theme)
            this.$root.$emit('set-theme', theme)
        },
    },
}
</script>

<style scoped>
footer {
    position: fixed;
    bottom: 0;

    width: 100%;

    font-size: 0.68rem;
    text-align: center;
}
</style>