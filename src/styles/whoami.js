import themes from '@/styles/app.js'

const { defaults: globalDefaults } = themes

const windowBorderRadius = '0.2rem'

const defaults = {
    ...globalDefaults,
    window: {
        margin: '0.5rem auto',

        'min-width': '4rem',
        'max-width': '97%',
        'min-height': '34rem',

        background: '#f6f6e3',
        'border-radius': windowBorderRadius,
        'box-shadow': '0 0 0.4rem #aaa',
    },
    titleBar: {
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',

        width: '100%',
        height: '0.9rem',

        background: '#666',
        'border-top-left-radius': windowBorderRadius,
        'border-top-right-radius': windowBorderRadius,

        'font-size': '0.5rem',
        color: '#ccc',
        'vertical-align': 'middle',
    },
    screen: {
        padding: '0.2rem 0.4rem 0.4rem 0.4rem',
    },
    pre: {
        margin: 0,

        color: '#657b83',

        'white-space': 'pre-wrap',
        'text-align': 'left',
        'font-family': 'Courier New, monospace',
        'font-size': '0.8rem',
        'font-weight': 'bold',
    },
}

const darkStyles = {
    window: {
        ...defaults.window,
        'background': '#002b36',
        'color': '#839496',
        'box-shadow': '0 0 0.3rem #111',
    },
}

const crappyStyles = {
    ...defaults,
}

export default {
    light: defaults,
    dark: {
        ...defaults,
        ...darkStyles,
    },
    vintage: {
        ...crappyStyles,
        ...darkStyles,
    },
    greybeard: {
        ...crappyStyles,
    },
}