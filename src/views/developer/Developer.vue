<template>
    <main>
        <div
            class="project"
            v-for="project in shownProjects"
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
        id: 'states',
        name: 'US State dimensions',
        desc: 'Which US states are widest? Tallest? Most elongated?',
    },
    {
        id: 'mystify',
        name: 'Mystify Your Mind',
        desc: 'A bit of Windows 95 nostalgia',
    },
    {
        id: 'julia',
        name: 'Julia Sets',
        desc: 'Explore Julia sets by changing function constants',
    },
    {
        id: 'deepnote',
        name: 'Deep Note',
        desc: 'A visualization of a familiar sound',
        requirements: [window.AudioContext],
    },
    {
        id: 'life',
        name: 'Life',
        desc: "Conway's Game of Life",
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
        shownProjects() {
            return this.projects.filter(project => {
                if (project.requirements) {
                    return project.requirements.every(requirement => !!requirement)
                }
                return true
            })
        },
    },
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