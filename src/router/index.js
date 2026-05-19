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
    },
    {
        path: '/user/:user/post/:post',
        name: 'UserPost',
        component: () => import('../views/UserPost.vue')
    },
    {
        path: '/compras/:orderId(\\d+)',
        name: 'Order',
        component: () => import('../views/Order.vue')
    },

    {
        path: '/compras/:productName',
        name: 'Product',
        component: () => import('../views/Product.vue')
    },

    {
        path: '/users/:userId(\\d+)?',
        name: 'Users',
        component: () => import('../views/Users.vue'),
        children: [
        {
            // users/:userId/profile
            path: '',
            component: () => import('../views/users/Index.vue')
          }, 

          {
            // users/:userId/profile
            path: 'profile',
            component: () => import('../views/users/Profile.vue')
          }, 
          
          {
            // users/:userId/courses
            path: 'courses',
            component: () => import('../views/users/Courses.vue')
          }
        ]
    },
    {
        path: '/:pathMatch(.*)',
        name: 'NotFound',
        component: () => import('../views/NotFound.vue')
    }
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router