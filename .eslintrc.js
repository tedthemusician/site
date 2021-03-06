module.exports = {
    root: true,
    env: {
        node: true,
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production'
            ? 'error'
            : 'off',
        'no-debugger': process.env.NODE_ENV === 'production'
            ? 'error'
            : 'off',
        semi: process.env.NODE_ENV === 'production'
            ? 'off'
            : [2, 'never'],
        'comma-dangle': ['error', 'always-multiline'],
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
}
