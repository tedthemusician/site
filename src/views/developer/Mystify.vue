<template>
    <animation-container
        :animation="animation"
    />
</template>

<script>
import AnimationContainer from '@/components/developer/AnimationContainer.vue'
import animation from '@/assets/developer/animations/mystify.js'

export default {
    components: {
        AnimationContainer,
    },
    data: () => ({
        animation,
    }),
}
</script>

<style scoped>

</style>