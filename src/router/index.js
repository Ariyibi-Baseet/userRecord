import { createRouter, createWebHashHistory } from "vue-router";
import RegisterView from "../views/RegisterView.vue";
// import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: RegisterView,
  },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: LoginView,
  // },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
