<template>
    <nav>
        <img :src="backButtonPath" @click="goBack" />
        <img :src="homeButtonPath" @click="goHome" />
    </nav>
</template>

<script>
export default {
    computed: {
        backButtonPath() {
            return require('@/assets/navBar/back.svg')
        },
        homeButtonPath() {
            return require('@/assets/navBar/home.svg')
        },
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        },
        goHome() {
            this.$router.push('/')
        },
    },
}
</script>

<style scoped>
nav {
    top: 0;
    position: fixed;
    display: flex;
    justify-content: left;
    width: 100%;
    height: 2rem;
    background: #344250;
    box-shadow: none;
}

img {
    padding: 0.2rem;
    width: 1.2rem;
    fill: #788;
}

a {
    margin: 0.5rem;
}
</style>