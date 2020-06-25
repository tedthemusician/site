import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        number: 10,
    },
    mutations: {
        increment(state) {
            state.number++
        }
    },
    actions: {
    },
    modules: {
    }
})
