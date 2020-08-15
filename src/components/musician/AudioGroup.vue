<template>
    <div class="wrapper">
        <div class="group">
            <h1 v-text="name" />
            <audio-player
                v-for="work in works"
                :key="work.title"
                :title="work.title"
                :basename="work.basename"
                :desc="work.desc"
            />
        </div>
    </div>
</template>

<script>
import AudioPlayer from './AudioPlayer.vue'

export default {
    components: {
        AudioPlayer,
    },
    props: {
        name: {
            type: String,
            required: true,
        },
        works: {
            type: Array,
            required: true,
        },
    },
}
</script>

<style scoped>
.wrapper {
    margin: 1rem;
    padding: 0;
    width: 90%;
    max-width: 22rem;
    background: rgb(99, 90, 99);
    border-radius: 0.75rem;
}

.group {
    text-align: center;
}

h1 {
    margin: 0;
    padding: 0.5rem;
    font-size: 1.75rem;
    color: #e1d4e4;
}
</style>