import { createRouter, createWebHistory } from "vue-router";
import initMap from "@/views/initMap.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: "home", path: "/", redirect: "/initMap" },
    { name: "initMap", path: "/initMap", component: initMap },
    {
      name: "mapRoaming",
      path: "/mapRoaming",
      component: () => import("@/views/mapRoaming.vue"),
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
      name: "draw",
      path: "/draw",
      redirect: "/draw/drawline",
      children: [
        {
          name: "drawline",
          path: "/draw/drawline",
          component: () => import("@/views/draw/drawLine.vue"),
        },
        {
          name: "drawarea",
          path: "/draw/drawarea",
          component: () => import("@/views/draw/drawArea.vue"),
        },
        {
          name: "drawcircle",
          path: "/draw/drawcircle",
          component: () => import("@/views/draw/drawCircle.vue"),
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
    },
    {
      name: "marker",
      path: "/marker",
      component: () => import("@/views/marker.vue")
    },
    {
      name: "popup",
      path: "/popup",
      component: () => import("@/views/Popup.vue")
    },
  ],
});

export default router;
