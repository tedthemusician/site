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
    },
    dark: {
        global: {
            ...defaults,
            background: 'linear-gradient(rgb(49, 28, 51), rgb(31, 22, 37) 60vh)',
            color: 'rgb(192, 183, 195)',
        },
    },
    nineties: {
        global: {
            ...crappyStyles,
            'background': 'black',
            'color': 'yellow',
            'font-weight': 'bold',
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
    },
}