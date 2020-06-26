import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Musician from '@/views/Musician.vue'
import Developer from '@/views/Developer.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/musician',
        name: 'Musician',
        component: Musician,
    },
    {
        path: '/developer',
        name: 'Developer',
        component: Developer,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
