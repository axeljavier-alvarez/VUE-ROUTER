import { createRouter, createWebHistory } from 'vue-router'
import Blog from '../views/Blog.vue'
import AboutView from '../views/AboutView.vue'
import HomeView from  '../views/HomeView.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router