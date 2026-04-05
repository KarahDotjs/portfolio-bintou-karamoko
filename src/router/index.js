import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/projet/vlan",
    name: "projet-vlan",
    component: () => import("../views/projets/ProjetVlan.vue"),
  },
  {
    path: "/projet/active-directory",
    name: "projet-ad",
    component: () => import("../views/projets/ProjetActiveDirectory.vue"),
  },
  {
    path: "/projet/routage",
    name: "projet-routage",
    component: () => import("../views/projets/ProjetRoutage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    }
    return savedPosition || { top: 0 };
  },
});

export default router;
