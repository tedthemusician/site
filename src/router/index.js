import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Musician from '@/views/musician/Musician.vue'
import Developer from '@/views/developer/Developer.vue'
import Whoami from '@/views/Whoami.vue'

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
    {
        path: '/whoami',
        name: 'Whoami',
        component: Whoami,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
