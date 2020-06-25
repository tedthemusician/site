import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        number: 10,
        theme: 'light',
    },
    mutations: {
        increment(state) {
            state.number++
        },
        setTheme(state, theme) {
            state.theme = theme
        },
    },
    actions: {
    },
    modules: {
    },
})
