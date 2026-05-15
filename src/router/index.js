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
        path: '/about',
        name: 'About',
        component: AboutView
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/blog/:post',
        name: 'Post',
        component: () => import('../views/Post.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router