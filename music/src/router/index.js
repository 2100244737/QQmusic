import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: "/login",
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login')
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
