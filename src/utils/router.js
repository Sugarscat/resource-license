import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: ()=> import("@/components/HomePage.vue") },
    { path: '/more', component: ()=> import("@/components/MorePage.vue") },
]

const router = createRouter({
    routes,
    history: createWebHashHistory(),
})

export default router;
