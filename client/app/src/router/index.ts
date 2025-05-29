import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/features/home/views/Home.vue'
import AboutView from '@/features/about/views/About.vue'
import NotFoundView from '@/features/errors/views/NotFoundView.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Root',
        redirect: 'home',
    },
    {
        path: '/home',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'About',
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