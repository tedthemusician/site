const defaults = {
    'padding': '0.5rem',
    
    'background-attachment': 'fixed',
    'font-family': 'Helvetica, Arial, sans-serif',
    'font-size': '1rem',
    'text-align': 'center',
}

const crappyStyles = {
    ...defaults,
    'font-family': 'Times New Roman, sans-serif',
}

export default {
    light: {
        global: {
            ...defaults,
            background: 'linear-gradient(rgb(295, 199, 225), #e8dfee 60vh)',
            color: '#311f5e',
        },
        sine: {
            fill: '#a8b',
        },
        soft: {
            color: '#9d8aa8',
        },
    },
    dark: {
        global: {
            ...defaults,
            background: 'linear-gradient(rgb(49, 28, 51), rgb(31, 22, 37) 60vh)',
            color: 'rgb(192, 183, 195)',
        },
        sine: {
            fill: '#646',
        },
        soft: {
            color: 'rgb(85, 73, 88)',
        },
    },
    vintage: {
        global: {
            ...crappyStyles,
            'background': 'black',
            'color': 'yellow',
            'font-weight': 'bold',
        },
        sine: {
            fill: 'blue',
        },
        soft: {
            color: 'purple',
        },
    },
    greybeard: {
        global: {
            ...crappyStyles,
            background: 'white',
            color: 'black',
            'font-family': 'Times New Roman, sans-serif',
            'text-align': 'left',
        },
        sine: {
            fill: 'black',
        },
    },
}