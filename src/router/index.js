import Vue from 'vue'
import VueRouter from 'vue-router'

import Developer from '@/views/developer/Developer.vue'
import Home from '@/views/Home.vue'
import Musician from '@/views/musician/Musician.vue'
import Pangram from '@/views/developer/Pangram.vue'
import Mystify from '@/views/developer/Mystify.vue'
import Julia from '@/views/developer/Julia.vue'
import DeepNote from '@/views/developer/DeepNote.vue'
import Life from '@/views/developer/Life.vue'
import Whoami from '@/views/Whoami.vue'

import Test from '@/views/Test.vue'

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
        path: '/developer/mystify',
        name: 'Mystify Your Mind',
        component: Mystify,
    },
    {
        path: '/developer/julia',
        name: 'Julia Sets',
        component: Julia,
    },
    {
        path: '/developer/deepNote',
        name: 'Deep Note',
        component: DeepNote,
    },
    {
        path: '/developer/life',
        name: 'Life',
        component: Life,
    },
    {
        path: '/whoami',
        name: 'Whoami',
        component: Whoami,
    },
    {
        path: '/test',
        name: 'Test',
        component: Test,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
