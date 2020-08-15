<template>
    <main>
        <animation-container v-bind="{ width, height, play }" />
    </main>
</template>

<script>
import AnimationContainer from '@/components/developer/AnimationContainer.vue'

import play from '@/assets/developer/animations/dvd.js'

export default {
    components: {
        AnimationContainer,
    },
    data: () => ({
        play,
        width: 800,
        height: 600,
    }),
}
</script>

<style>
</style>