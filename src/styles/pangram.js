const crappyStyles = {
    background: 'white',
    color: 'black',
    'font-family': 'Times New Roman, serif',
}

const greybeardStyles = {
    input: crappyStyles,
    guide: crappyStyles,
}

export default {
    light: {
        incomplete: {
            input: {
                background: '#fbb',
            },
            guide: {
                color: 'inherit',
            },
        },
        complete: {
            input: {
                background: '#efe',
            },
            guide: {
                color: '#080',
            },
        },
    },
    dark: {
        incomplete: {
            input: {
                background: '#756',
                color: '#ddd',
            },
            guide: {
                color: 'inherit',
            },
        },
        complete: {
            input: {
                background: '#676',
                color: '#ded',
            },
            guide: {
                color: '#8d8',
            },
        },
    },
    vintage: {
        incomplete: {
            input: {
                ...crappyStyles,
                background: 'darkred',
                color: 'pink',
            },
            guide: {
                color: 'inherit',
            },
        },
        complete: {
            input: {
                ...crappyStyles,
                background: 'darkgreen',
                color: 'white',
            },
            guide: {
                color: 'lightgreen',
            },
        },
    },
    greybeard: {
        incomplete: greybeardStyles,
        complete: greybeardStyles,
    },
}