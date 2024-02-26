import { createRouter, createWebHistory } from "vue-router";
import initMap from "@/components/initMap.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: "home", path: "/", redirect: "/initMap" },
    { name: "initMap", path: "/initMap", component: initMap },
    {
      name: "base",
      path: "/base",
      redirect: "/base/mapControls",
      children: [
        {
          name: "controls",
          path: "/base/mapControls",
          component: () => import("@/views/base/mapControls.vue"),
        },
        {
          name: "roaming",
          path: "/base/mapRoaming",
          component: () => import("@/views/base/mapRoaming.vue"),
        },
        {
          name: "download",
          path: "/base/mapDown",
          component: () => import("@/views/base/mapDown.vue"),
        },
        {
          name: "draw",
          path: "/base/draw",
          component: () => import("@/views/base/draw.vue"),
        },
        {
          name: "layerAttr",
          path: "/base/layerAttr",
          component: () => import("@/views/base/layerAttr.vue"),
        },
        {
          name: "mapAttr",
          path: "/base/mapAttr",
          component: () => import("@/views/base/mapAttr.vue"),
        },
        {
          name: "overlay",
          path: "/base/overlay",
          component: () => import("@/views/base/overlay.vue"),
        },
      ],
    },
    {
      name: "layer",
      path: "/layer",
      redirect: "/layer/getlayer",
      children: [
        {
          name: "getlayer",
          path: "/layer/getlayer",
          component: () => import("@/views/layer/getLayer.vue"),
        },
        {
          name: "addlayer",
          path: "/layer/addlayer",
          component: () => import("@/views/layer/addLayer.vue"),
        },
        {
          name: "removelayer",
          path: "/layer/removelayer",
          component: () => import("@/views/layer/removeLayer.vue"),
        },
        {
          name: "setlayer",
          path: "/layer/setlayer",
          component: () => import("@/views/layer/setLayer.vue"),
        },
      ],
    },
    {
      name: "load",
      path: "/load",
      redirect: "/load/geojson",
      children: [
        {
          name: "geojson",
          path: "/load/geojson",
          component: () => import("@/views/load/geojson.vue"),
        },
      ],
    }
  ],
});

export default router;
