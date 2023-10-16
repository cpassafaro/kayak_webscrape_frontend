// Composables
import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "../pages/welcomepage.vue";

const routes = [
  {
    path: "/",
    component: WelcomePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
