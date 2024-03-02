import initMap from "@/components/initMap.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: "home", path: "/", redirect: "/initMap" },
    { name: "initMap", path: "/initMap", component: initMap },
    {
      name: "map",
      path: "/map",
      redirect: "/map/fog",
      children: [
        {
          name: "fog",
          path: "/map/fog",
          component: () => import("@/views/map/mapFog.vue"),
        },
        {
          name: "attr",
          path: "/map/attr",
          component: () => import("@/views/map/mapAttr.vue"),
        },
        {
          name: "controls",
          path: "/map/controls",
          component: () => import("@/views/map/mapControls.vue"),
        }
      ],
    },
  ],
});

export default router;
