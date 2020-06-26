const defaults = {
    global: {
        padding: '0.5rem',
        
        color: '#311f5e',

        'background-attachment': 'fixed',
        'font-family': 'Helvetica, Arial, sans-serif',
        'font-size': '1rem',
        'text-align': 'center',
    },

    link: {
        normal: {
            outline: 'none',
            'text-decoration': 'none',
        },
        link: {},
        visited: {},
        focus: {},
        hover: {},
        active: {},
    },
}

const crappyStyles = {
    global: {
        ...defaults.global,
        'font-family': 'Times New Roman, sans-serif',
    },
}

export default {
    light: {
        ...defaults,
        global: {
            ...defaults.global,
            background: 'linear-gradient(rgb(295, 199, 225), #e8dfee 60vh)',
        },
        soft: {
            color: '#9d8aa8',
        },
        home: {
            logo: {
                fill: '#a8b',
            },
        },
    },
    dark: {
        ...defaults,
        global: {
            ...defaults.global,
            background: 'linear-gradient(rgb(49, 28, 51), rgb(31, 22, 37) 60vh)',
            color: 'rgb(192, 183, 195)',
        },
        soft: {
            color: 'rgb(85, 73, 88)',
        },
        home: {
            logo: {
                fill: '#646',
            },
        },
    },
    vintage: {
        ...defaults,
        global: {
            ...crappyStyles.global,
            'background': 'black',
            'color': 'yellow',
            'font-weight': 'bold',
        },
        soft: {
            color: 'purple',
        },
        home: {
            logo: {
                fill: 'blue',
            },
        },
    },
    greybeard: {
        ...defaults,
        global: {
            ...crappyStyles.global,
            background: 'white',
            color: 'black',
            'font-family': 'Times New Roman, sans-serif',
            'text-align': 'left',
        },
    },
}