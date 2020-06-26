import Vue from 'vue'
import Vuex from 'vuex'

import themes from '@/styles/themes.js'

Vue.use(Vuex)

function getNestedProperty(root, keys) {
    return keys.reduce((obj, key) => obj[key], root)
}

export default new Vuex.Store({
    state: {
        theme: 'light',
    },
    mutations: {
        setTheme(state, theme) {
            state.theme = theme
        },
    },
    actions: {
        setTheme({ commit }, theme) {
            commit('setTheme', theme)
        },
    },
    getters: {
        style: state => themes[state.theme],
        getStyle: (state, getters) => (...subTheme) => {
            const { style } = getters
            return getNestedProperty(style, subTheme)
        },
    },
    modules: {
    },
})
