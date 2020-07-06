<template>
    <nav :style="barStyle" />
</template>

<script>
export default {
    computed: {
        barStyle() {
            return this.$store.getters.getStyle('app', 'navBar')
        },
    },
}
</script>

<style>
</style>