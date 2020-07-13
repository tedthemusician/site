<template>
    <main>
        <div
            :style="projectStyle"
            v-for="project in projects"
            :key="project.id"
        >
            <router-link :to="project.path">
                <h2 :style="nameStyle" v-text="project.name" />
            </router-link>
            <summary :style="descStyle" v-text="project.desc" />
        </div>
    </main>
</template>

<script>
const projects = [
    {
        id: 'pangram',
        name: 'Pangram finder',
        desc: 'A tool for finding new pangrams',
    },
    {
        id: 'dvd',
        name: 'Evil DVD Screensaver',
        desc: 'A DVD screensaver whose icon never quite hits the corner',
    },
    {
        id: 'mystify',
        name: 'Mystify Your Mind',
        desc: 'A bit of Windows 95 nostalgia',
    },
    {
        id: 'deepnote',
        name: 'Deep Note',
        desc: 'A visualization of a familiar sound',
    },
    {
        id: 'life',
        name: 'Life',
        desc: "Conway's Game of Life",
    },
    {
        id: 'julia',
        name: 'Julia Sets',
        desc: 'Explore Julia sets by changing function constants',
    },
]

export default {
    data: () => ({
        projects: projects.map(project => ({
            ...project,
            path: `/developer/${project.id}`,
        })),
    }),
    computed: {
        projectStyle() {
            return this.getProjectStyle('project')
        },
        nameStyle() {
            return this.getProjectStyle('name')
        },
        descStyle() {
            return this.getProjectStyle('desc')
        },
    },
    methods: {
        getProjectStyle(element) {
            return this.$store.getters.getStyle('developer', element)
        },
    },
}
</script>

<style scoped>

</style>