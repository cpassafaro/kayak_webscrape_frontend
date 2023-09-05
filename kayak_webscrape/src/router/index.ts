// Composables
import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "../pages/welcomepage.vue";
import MainPage from "../pages/mainpage.vue";

const routes = [
  {
    path: "/",
    component: WelcomePage,
  },
  {
    path: "/dashboard",
    component: MainPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
