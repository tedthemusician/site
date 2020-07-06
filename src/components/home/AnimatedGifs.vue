<template>
    <div>
        <img :src="computerSrc" />
        <div id="space" />
        <img :src="notesSrc" />
    </div>
</template>

<script>
export default {
    computed: {
        notesSrc() {
            return require('@/assets/home/notes.gif')
        },
        computerSrc() {
            return require('@/assets/home/computer.gif')
        },
    },
}
</script>

<style>
img {
    width: 3rem;
    height: 2rem;
}

#space {
    display: inline-block;
    width: 4rem;
    height: 1rem;
}
</style>