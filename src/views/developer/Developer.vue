<template>
    <main>
        <div
            class="project"
            v-for="project in projects"
            :key="project.id"
        >
            <router-link :to="project.path">
                <h2 v-text="project.name" />
            </router-link>
            <summary v-text="project.desc" />
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
}
</script>

<style scoped>
.project {
    margin: 1rem;
}

h2 {
    margin: 0;
}

summary {
    margin: 0;
    color: #879;
}
</style>