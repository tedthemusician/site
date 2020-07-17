import themes from '@/styles/app.js'

const { defaults: globalDefaults } = themes

const defaults = {
    ...globalDefaults,
    project: {
        margin: '1rem',
    },
    name: {
        margin: 0,
    },
    desc: {
        margin: 0,
        color: '#879',
    },
}

export default {
    light: defaults,
    dark: defaults,
    vintage: {
        ...defaults,
        desc: {
            ...defaults.desc,
            color: 'orange',
        },
    },
    greybeard: {
        ...defaults,
        name: {
            ...defaults.name,
            color: 'blue',
        },
        desc: {
            ...defaults.desc,
            color: 'black',
        },
    },
}