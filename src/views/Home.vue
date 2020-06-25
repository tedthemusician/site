<template>
    <div id="container">
        <div class="home">
            This is the home content
        </div>
        <button @click="hitButton">Do it</button>
        <div v-text="number" />
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import store from '@/store/index.js'

export default {
    store,
    name: 'Home',
    data: () => ({
    }),
    computed: {
        number() {
            return store.state.number
        }
    },
    components: {
    },
    methods: {
        hitButton() {
            store.commit('increment')
        },
    },
}
</script>
