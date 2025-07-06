import { createRouter, createWebHistory } from "vue-router";

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Sustainability from '@/views/Sustainability.vue';
import Contact from '@/views/Contact.vue';
import Collections from '@/views/Collections.vue';

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
        path: '/collections',
        component: Collections,
        meta: {
            title: 'Collections',
        },
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
    },
    {
        path: '/contact',
        component: Contact,
        meta: {
            title: 'Contact',
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
