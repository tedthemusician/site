const navBarHeight = '2rem'

const defaults = {
    global: {
        color: '#311f5e',
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

const light = {
    ...defaults,
    global: {
        ...defaults.global,
    },

    body: {
        background: 'linear-gradient(rgb(295, 199, 225), #e8dfee 60vh) fixed',
    },

    navBar: {
        position: 'fixed',
        display: 'flex',
        'justify-content': 'left',
        width: '100%',
        height: navBarHeight,
        background: '#9593ce',
        'box-shadow': '0 0 0.3rem gray',
    },
    
    navButton: {
        padding: '0.2rem',
        width: '1.2rem',
        fill: '#cce',
    },

    soft: {
        color: '#9d8aa8',
    },

    footer: {
        background: '#858fa0',
        color: '#d2d2de',
    },
}

export default {
    light,
    dark: {
        ...light,
        global: {
            ...defaults.global,
            color: 'rgb(192, 183, 195)',
        },
        body: {
            background: 'linear-gradient(rgb(49, 28, 51), rgb(31, 22, 37) 60vh) fixed',
        },
        soft: {
            color: 'rgb(85, 73, 88)',
        },
        navBar: {
            ...light.navBar,
            background: '#344250',
            'box-shadow': 'none',
        },
        navButton: {
            ...light.navButton,
            fill: '#788',
        },
        footer: {
            background: '#2c2c38',
            color: '#706b71',
        },
    },
    vintage: {
        ...light,
        ...crappyStyles,
        global: {
            ...crappyStyles.global,
            'color': 'yellow',
            'font-weight': 'bold',
        },
        body: {
            'background': 'black',
        },
        soft: {
            color: 'purple',
        },
        navBar: {
            ...light.navBar,
            background: '#222',
            'box-shadow': 'none',
        },
        navButton: {
            ...light.navButton,
            fill: '#080',
        },
        footer: {
            background: 'black',
            color: 'purple',
        },
    },
    greybeard: {
        ...light,
        ...crappyStyles,
        global: {
            ...crappyStyles.global,
            color: 'black',
            'font-family': 'Times New Roman, sans-serif',
            'text-align': 'left',
        },
        body: {
            background: 'white',
        },
        navBar: {
            ...light.navBar,
            background: 'white',
            'box-shadow': 'none',
        },
        navButton: {
            ...light.navButton,
            fill: 'black',
        },
        footer: {
            background: 'white',
            color: 'black',
        },
    },
}