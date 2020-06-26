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

    home: {
        logo: {
            fill: '#a8b',
        },
        whoami: {
            'margin-top': '1.5rem',
            
            'font-family': 'Courier New, monospace',
            'font-size': '0.85rem',
        },
    },
}

const crappyStyles = {
    global: {
        ...defaults.global,
        'font-family': 'Times New Roman, sans-serif',
    },

    home: {
        ...defaults.home,
        whoami: {
            ...defaults.home.whoami,
            'font-family': 'Times New Roman, serif',
        },
    },
}

const light = {
    ...defaults,
    global: {
        ...defaults.global,
        background: 'linear-gradient(rgb(295, 199, 225), #e8dfee 60vh)',
    },
    soft: {
        color: '#9d8aa8',
    },
}

export default {
    light,
    dark: {
        ...light,
        global: {
            ...defaults.global,
            background: 'linear-gradient(rgb(49, 28, 51), rgb(31, 22, 37) 60vh)',
            color: 'rgb(192, 183, 195)',
        },
        soft: {
            color: 'rgb(85, 73, 88)',
        },
        home: {
            ...light.home,
            logo: {
                fill: '#646',
            },
        },
    },
    vintage: {
        ...light,
        ...crappyStyles,
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
            ...crappyStyles.home,
            logo: {
                fill: 'blue',
            },
            whoami: {
                ...crappyStyles.home.whoami,
                'font-size': '0.95rem',
                color: 'green',
            },
        },
    },
    greybeard: {
        ...light,
        ...crappyStyles,
        global: {
            ...crappyStyles.global,
            background: 'white',
            color: 'black',
            'font-family': 'Times New Roman, sans-serif',
            'text-align': 'left',
        },
        home: {
            ...crappyStyles.home,
            whoami: {
                ...crappyStyles.home.whoami,
                'font-size': defaults['font-size'],
            },
        },
    },
}