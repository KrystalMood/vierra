import { createRouter, createWebHistory } from "vue-router";

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Sustainability from '@/views/Sustainability.vue';

const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            title: 'Home',
        },
        name: 'home',
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: 'About',
        },
    },
    {
        path: '/sustainability',
        component: Sustainability,
        meta: {
            title: 'Sustainability',
        },
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const APP_TITLE = import.meta.env.VITE_APP_TITLE;
router.beforeEach((to, _from, next) => {
    document.title = to.meta.title ? `${to.meta.title} | ${APP_TITLE}` : APP_TITLE;
    next();
})

export default router;
