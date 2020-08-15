<template>
    <main>
        <audio-group
            v-for="playlist in musicInfo"
            :key="playlist.genre"
            :name="playlist.genre"
            :works="playlist.works"
        />
    </main>
</template>

<script>
import musicInfo from '@/assets/musician/musicInfo.js'
import AudioGroup from '@/components/musician/AudioGroup.vue'

export default {
    data: () => ({
        musicInfo,
    }),
    components: {
        AudioGroup,
    },
}
</script>

<style scoped>
main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

audio {
    width: 20rem;
    height: 2rem;
}
</style>