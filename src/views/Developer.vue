<template>
    <main>
        <div v-for="project in projects" :key="project.id">
            <a>
                <h2 v-text="project.name" />
            </a>
            <p v-text="project.comment" />
        </div>
    </main>
</template>

<script>
const projects = [
    {
        id: 'pangram',
        name: 'Pangram finder',
        comment: 'A tool for finding new pangrams',
    },
    {
        id: 'dvd',
        name: 'Evil DVD Screensaver',
        comment: 'A DVD screensaver whose icon never quite hits the corner',
    },
    {
        id: 'mystify',
        name: 'Mystify Your Mind',
        comment: 'A bit of Windows 95 nostalgia',
    },
    {
        id: 'deepnote',
        name: 'Deep Note',
        comment: 'A visualization of a familiar sound',
    },
    {
        id: 'life',
        name: 'Life',
        comment: "Conway's Game of Life",
    },
    {
        id: 'julia',
        name: 'Julia Sets',
        comment: 'A Julia Set manipulator',
    },
]

export default {
    data: () => ({
        projects,
    }),
}
</script>

<style scoped>

</style>