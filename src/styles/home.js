import themes from '@/styles/app.js'

const { defaults: globalDefaults } = themes

const defaults = {
    ...globalDefaults,
    logo: {
        fill: '#a8b',
    },
    whoami: {
        'margin-top': '1.5rem',
        
        'font-family': 'Courier New, monospace',
        'font-size': '0.85rem',
    },
}

const crappyStyles = {
    ...defaults,
    whoami: {
        ...defaults.whoami,
        'font-family': 'Times New Roman, serif',
    },
}

export default {
    light: defaults,
    dark: {
        ...defaults,
        logo: {
            fill: '#646',
        },
    },
    vintage: {
        ...crappyStyles,
        logo: {
            fill: 'blue',
        },
        whoami: {
            ...crappyStyles.whoami,
            'font-size': '0.95rem',
            color: 'green',
        },
    },
    greybeard: {
        ...crappyStyles,
        whoami: {
            ...crappyStyles.whoami,
            'font-size': defaults['font-size'],
        },
    },
}