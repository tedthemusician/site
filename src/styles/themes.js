const defaults = {
    'padding': '0.5rem',
    
    'background-attachment': 'fixed',
    'font-family': 'Helvetica, Arial, sans-serif',
    'font-size': '1rem',
    'text-align': 'center'
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

    },
    greybeard: {
        global: {
            ...defaults,
            background: 'white',
            color: 'black',
            'font-family': 'Times New Roman, sans-serif',
            'text-align': 'left',
        },
    },
}