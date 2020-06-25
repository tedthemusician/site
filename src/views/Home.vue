<template>
    <div id="container">
        <div class="home">
            This is the home content
        </div>
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
}
</script>
