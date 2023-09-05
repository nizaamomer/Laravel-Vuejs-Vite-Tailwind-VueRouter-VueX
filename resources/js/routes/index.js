import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "index",
            component: App,
        },
        {
            path: "/home",
            name: "home",
            component: Home,
        },
        {
            path: "/about",
            name: "about",
            component: About,
        },

    ],
});

export default router;
