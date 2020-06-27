import themes from '@/styles/app.js'

const { defaults: globalDefaults } = themes

const defaults = {
    ...globalDefaults,
}

const crappyStyles = {
    ...defaults,
}

const light = {
    ...defaults,
}

export default {
    light,
    dark: {
        ...light,
    },
    vintage: {
        ...crappyStyles,
    },
    greybeard: {
        ...crappyStyles,
    },
}