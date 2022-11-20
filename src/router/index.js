import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Views/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    // {
    //   path: '/portfolio',
    //   component: () => import('./views/Portfolio.vue'),
    // },
    // {
    //   path: '/todo',
    //   component: () => import('./views/Todo.vue'),
    // },
    {
      path: '/dynamic',
      component: () => import('../Views/Dynamic.vue'),
    },
    {
      path: '/detail',
      component: () => import('../Views/Detail.vue'),
    },
    {
      path: '/list',
      component: () => import('../Views/List.vue'),
    },
    {
      path: '/article',
      component: () => import('../Views/Article.vue'),
    },
     {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../Views/NotFound.vue"),
  },
    // {
    //   path: '/header',
    //   component: () => import('./components/Header.vue'),
    // },
    // {
    //   path: '/about',
    //   component: () => import('./components/About.vue'),
    // },
    // {
    //   path: '/contact',
    //   component: () => import('./components/Contact.vue'),
    // },
  ],
})