<template>
    <footer :style="footerStyle">
        <section id="copyright">
            Copyright &copy; 2020 Ted Oliver
        </section>
        <section id="themes">
            <a @click="setTheme('light')">light</a>
            |
            <a @click="setTheme('dark')">dark</a>
            |
            <a @click="setTheme('vintage')">vintage</a>
            |
            <a @click="setTheme('greybeard')">greybeard</a>
        </section>
    </footer>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    computed: {
        footerStyle() {
            return {
                ...this.$store.getters.getStyle('app', 'soft'),
            } 
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

    display: flex;
    justify-content: space-between;

    width: 100%;

    background: black;
    font-size: 0.68rem;
}

section {
    padding: 0.1rem 0.2rem 0.1rem 0.2rem;
}

a {
    cursor: pointer;
}
</style>