import { createRouter, createWebHistory } from "vue-router";

import Home from "@/components/Home.vue";

const routes = [
    { path: '/resource-license/', redirect: '/resource-license/home' },
    { path: '/resource-license/home', component: Home },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;