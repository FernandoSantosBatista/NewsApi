import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TecView from "../views/TecView.vue";
import BusView from "../views/BusView.vue";
import EntView from "../views/EntView.vue";
import HealView from "../views/HealView.vue";
import SciView from "../views/SciView.vue";
import SportView from "../views/SportView.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/tecnologia",
      name: "tec",
      component: TecView,
    },
    {
      path: "/negocios",
      name: "neg",
      component: BusView,
    },
    {
      path: "/entreterimento",
      name: "ent",
      component: EntView,
    },
    {
      path: "/saude",
      name: "health",
      component: HealView,
    },
    {
      path: "/ciencias",
      name: "SciView",
      component: SciView,
    },
    {
      path: "/esportes",
      name: "SportView",
      component: SportView,
    },
   
  ],
});

export default router;
