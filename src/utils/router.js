import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: ()=> import("@/components/Home.vue") },
    { path: '/more', component: ()=> import("@/components/More.vue") },
    { path: '/authorized', component: ()=> import("@/components/Authorized.vue") },
    { path: '/unauthorized', component: ()=> import("@/components/Unauthorized.vue") },
]

const router = createRouter({
    routes,
    history: createWebHashHistory(),
})

export default router;
