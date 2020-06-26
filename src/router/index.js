import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import MusicShowcase from '@/views/MusicShowcase.vue'
import DevelopmentShowcase from '@/views/DevelopmentShowcase.vue'

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
        component: MusicShowcase,
    },
    {
        path: '/developer',
        name: 'Developer',
        component: DevelopmentShowcase,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
