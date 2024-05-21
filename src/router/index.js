import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/LandingHome.vue";
import LoginView from "../views/LoginView.vue";
import TablaComp from "../views/TablaComponentes.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/:id",
    name: "tabla",
    component: TablaComp,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router









