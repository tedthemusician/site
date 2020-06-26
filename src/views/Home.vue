<template>
    <div id="container">
        <h1>Ted Oliver</h1>
        <sine-logo width="12rem" />
        <div id="links">
            developer | musician
        </div>
    </div>
</template>

<script>
import SineLogo from '@/components/SineLogo.vue'

export default {
    name: 'Home',
    components: {
        SineLogo,
    },
}
</script>

<style scoped>
#links {
    margin: 1rem;
    font-size: 1.25rem;
}
</style>