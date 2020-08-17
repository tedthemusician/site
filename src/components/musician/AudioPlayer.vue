<template>
    <div class="player">
        <h2 v-text="title" />
        <audio controls :src="src" />
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        basename: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: false,
        },
    },
    computed: {
        src() {
            return require(`@/assets/musician/audio/${this.basename}.mp3`)
        },
    },
}
</script>

<style scoped>
.player {
    margin: 0.25rem auto;
    padding: 0;
    width: 90%;
}

h2 {
    margin: 0 0 0.25rem 0;
    font-weight: normal;
    font-size: 1rem;
}

audio {
    margin-bottom: 1rem;
    width: 100%;
    height: 1.5rem;
}
</style>