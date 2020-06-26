import Vue from 'vue'
import Vuex from 'vuex'

import themes from '@/styles/themes.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        theme: themes.light,
    },
    mutations: {
        setTheme(state, theme) {
            state.theme = themes[theme]
        },
    },
    actions: {
        setTheme({ commit }, theme) {
            commit('setTheme', theme)
        },
    },
    getters: {
        getStyle: state => subTheme => state.theme[subTheme],
    },
    modules: {
    },
})
