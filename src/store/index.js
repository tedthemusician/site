import Vue from 'vue'
import Vuex from 'vuex'

import themes from '@/styles/themes.js'

Vue.use(Vuex)

function getNestedProperty(...keys) {
    return keys.reduce((obj, key) => obj[key], themes)
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
        getStyle: state => (view, ...subTheme) => {
            return getNestedProperty(view, state.theme, ...subTheme)
        },
    },
    modules: {
    },
})
