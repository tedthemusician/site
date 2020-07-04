<template>
<main :style="windowStyle">
    <div id="title-bar" :style="titleBarStyle">
        <span id="title">PreTYY</span>
    </div>
    <div id="content" :style="contentStyle">
        This is the content of the window.
    </div>
</main>
</template>

<script>
export default {
    computed: {
        windowStyle() {
            return this.$store.getters.getStyle('whoami', 'window')
        },
        titleBarStyle() {
            return this.$store.getters.getStyle('whoami', 'titleBar')
        },
        contentStyle() {
            return this.$store.getters.getStyle('whoami', 'content')
        },
    },
}
</script>

<style scoped>
</style>