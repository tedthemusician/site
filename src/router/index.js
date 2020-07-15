import Vue from 'vue'
import VueRouter from 'vue-router'

import Developer from '@/views/developer/Developer.vue'
import DVD from '@/views/developer/DVD.vue'
import Home from '@/views/Home.vue'
import Musician from '@/views/musician/Musician.vue'
import Pangram from '@/views/developer/Pangram.vue'
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
        path: '/developer/pangram',
        name: 'Pangram',
        component: Pangram,
    },
    {
        path: '/developer/dvd',
        name: 'DVD Menu',
        component: DVD,
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
