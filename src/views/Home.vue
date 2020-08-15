<template>
    <main>
        <img id="logo" :src="sineLogoPath" />
        <home-header />
        <div id="links">
            <div id="showcases">
                <router-link to="/developer">developer</router-link>
                |
                <router-link to="/musician">musician</router-link>
            </div>
            <div id="whoami">
            <router-link to="/whoami">whoami</router-link>
            </div>
        </div>
    </main>
</template>

<script>
import HomeHeader from '@/components/home/HomeHeader.vue'

export default {
    name: 'Home',
    components: {
        HomeHeader,
    },
    computed: {
        sineLogoPath() {
            return require('@/assets/home/sine.svg')
        },
    },
}
</script>

<style scoped>
main {
    margin-top: 2rem;
}

#logo {
    width: 12rem;
}

#links {
    margin-top: 1rem;
    font-size: 1.25rem;
    user-select: none;
}

#whoami {
    margin-top: 1.5rem;
    font-family: Courier New, monospace;
    font-size: 0.85rem;
}
</style>