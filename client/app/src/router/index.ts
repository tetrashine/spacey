import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/features/home/views/Home.vue'
import AboutView from '@/features/about/views/About.vue'
import NotFoundView from '@/features/errors/views/NotFoundView.vue'

const routes = [
    {
        path: '/',
        redirect: 'home',
    },
    {
        path: '/home',
        component: HomeView,
    },
    {
        path: '/about',
        component: AboutView,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundView,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router