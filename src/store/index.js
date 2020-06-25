import Vue from 'vue'
import Vuex from 'vuex'

import themes from '@/styles/themes.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        number: 10,
        theme: themes.light,
    },
    mutations: {
        increment(state) {
            state.number++
        },
        setTheme(state, theme) {
            state.theme = themes[theme]
        },
    },
    actions: {
    },
    modules: {
    },
})
