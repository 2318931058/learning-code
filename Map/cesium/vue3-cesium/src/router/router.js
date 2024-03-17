export let routes = [
  {
    name: "init",
    path: "/home",
    component: () => import("../components/home.vue"),
  },
  {
    name: "/",
    path: "/",
    redirect: "/home",
  },
  {
    name: "view",
    path: "/view",
    redirect: "/view/get",
    children: [
      {
        name: "getViewInfo",
        path: "/view/get",
        redirect: "/view/get/currentScope",
        children: [
          {
            name: "getCurrentScope",
            path: "/view/get/currentScope",
            component: () => import("../views/view/get/currentScope.vue"),
          },
        ],
      },
    ],
  },
  {
    name: 'event',
    path: '/event',
    redirect: '/event/click',
    children: [
      {
        name: 'click',
        path: '/event/click',
        component: () => import ('../views/event/click.vue')
      },
      {
        name: 'move',
        path: '/event/move',
        component: () => import ('../views/event/move.vue')
      },
    ]
  },
  {
    name: "coordinates",
    path: "/coordinates",
    redirect: "/coordinates/lonlatToCartesian",
    children: [
      {
        name: "geographyCoordinate",
        path: "/coordinates/geographyCoordinate",
        component: () => import("../views/coordinates/geographyCoordinate.vue"),
      },
      {
        name: "screenCoordinate",
        path: "/coordinates/screenCoordinate",
        component: () => import("../views/coordinates/screenCoordinate.vue"),
      },
      {
        name: "wordCoordinate",
        path: "/coordinates/worldCoordinate",
        component: () => import("../views/coordinates/wordCoordinate.vue"),
      },
    ],
  },
  {
    name: "loadData",
    path: "/loadData",
    redirect: "/loadData/3DTiles",
    children: [
      {
        name: "3DTiles",
        path: "/loadData/3DTiles",
        component: () => import("../views/loadData/3DTiles.vue"),
      },
      {
        name: "czml",
        path: "/loadData/czml",
        component: () => import("../views/loadData/czml.vue"),
      },
      {
        name: "geojson",
        path: "/loadData/geojson",
        component: () => import("../views/loadData/geojson.vue"),
      },
      {
        name: "gltf",
        path: "/loadData/gltf",
        component: () => import("../views/loadData/gltf.vue"),
      },
      {
        name: "topjson",
        path: "/loadData/topjson",
        component: () => import("../views/loadData/topjson.vue"),
      },
      {
        name: "kml",
        path: "/loadData/kml",
        component: () => import("../views/loadData/kml.vue"),
      },
    ],
  },
  {
    name: "camera",
    path: "/camera",
    redirect: "/camera/setView",
    children: [
      {
        name: "setView",
        path: "/camera/setView",
        component: () => import("../views/camera/setView.vue"),
      },
      {
        name: "lookAt",
        path: "/camera/lookAt",
        component: () => import("../views/camera/lookAt.vue"),
      },
      {
        name: "flyTo",
        path: "/camera/flyTo",
        component: () => import("../views/camera/flyTo.vue"),
      },
    ],
  },
  {
    name: "entity",
    path: "/entity",
    redirect: "/entity/baseEntity",
    children: [
      {
        name: "baseEntity",
        path: "/entity/baseEntity",
        redirect: "/entity/baseEntity/point",
        children: [
          {
            name: "point",
            path: "/entity/baseEntity/point",
            component: () => import("../views/entity/baseEntity/point.vue"),
          },
          {
            name: "polyline",
            path: "/entity/baseEntity/polyline",
            component: () => import("../views/entity/baseEntity/polyline.vue"),
          },
          {
            name: "polygon",
            path: "/entity/baseEntity/polygon",
            component: () => import("../views/entity/baseEntity/polygon.vue"),
          },
          {
            name: "label",
            path: "/entity/baseEntity/label",
            component: () => import("../views/entity/baseEntity/label.vue"),
          },
          {
            name: "rectangle",
            path: "/entity/baseEntity/rectangle",
            component: () => import("../views/entity/baseEntity/rectangle.vue"),
          },
          {
            name: "box",
            path: "/entity/baseEntity/box",
            component: () => import("../views/entity/baseEntity/box.vue"),
          },
          {
            name: "ellipse",
            path: "/entity/baseEntity/ellipse",
            component: () => import("../views/entity/baseEntity/ellipse.vue"),
          },
          {
            name: "cylinder",
            path: "/entity/baseEntity/cylinder",
            component: () => import("../views/entity/baseEntity/cylinder.vue"),
          },
          {
            name: "billboard",
            path: "/entity/baseEntity/billboard",
            component: () => import("../views/entity/baseEntity/billboard.vue"),
          },
        ],
      },
      {
        name: "otherEntity",
        path: "/entity/otherEntity",
        redirect: "/entity/otherEntity/composite",
        children: [
          {
            name: "compositeEntity",
            path: "/entity/otherEntity/composite",
            component: () =>
              import("../views/entity/otherEntity/compositeEntity.vue"),
          },
          {
            name: "callbackProperty",
            path: "/entity/otherEntity/callbackProperty",
            component: () =>
              import("../views/entity/otherEntity/callbackProperty.vue"),
          },
        ],
      },
      {
        name: "entityMethods",
        path: "/entity/methods",
        redirect: "/entity/methods/remove",
        children: [
          {
            name: "removeEntity",
            path: "/entity/methods/remove",
            component: () =>
              import("../views/entity/entityMethods/removeEntity.vue"),
          },
          {
            name: "getEntity",
            path: "/entity/methods/get",
            component: () =>
              import("../views/entity/entityMethods/getEntity.vue"),
          },
          {
            name: "addEntity",
            path: "/entity/methods/add",
            component: () =>
              import("../views/entity/entityMethods/addEntity.vue"),
          },
          {
            name: "bindingEntity",
            path: "/entity/methods/binding",
            component: () =>
              import("../views/entity/entityMethods/bindingEntity.vue"),
          },
        ],
      },
    ],
  },
  {
    name: "layer",
    path: "/layer",
    redirect: "/layer/getLayer",
    children: [
      {
        name: "getLayer",
        path: "/layer/getLayer",
        component: () => import("../views/layer/getLayer.vue"),
      },
      {
        name: "addLayer",
        path: "/layer/addLayer",
        component: () => import("../views/layer/addLayer.vue"),
      },
      {
        name: "removeLayer",
        path: "/layer/removeLayer",
        component: () => import("../views/layer/removeLayer.vue"),
      },
    ],
  },
  {
    name: "primitive",
    path: "/primitive",
    redirect: "/primitive/type",
    children: [
      {
        name: "primitiveType",
        path: "/primitive/type",
        redirect: "/primitive/type/base/basePrimitive",
        children: [
          {
            name: "basePrimitive",
            path: "/primitive/type/basePrimitive",
            component: () =>
              import("../views/primitive/primitiveType/basePrimitive.vue"),
          },
          {
            name: "mutiPrimitive",
            path: "/primitive/type/mutiPrimitive",
            component: () =>
              import("../views/primitive/primitiveType/mutiPrimitive.vue"),
          },
        ],
      },
    ],
  },
  {
    name: 'particle',
    path: '/particle',
    redirect: '/particle/point',
    children: [
      {
        name: 'pointRender',
        path: '/particle/render',
        component: () => import ('../views/particle/particle.vue')
      }
    ]
  },
  {
    name: 'polymerization',
    path: '/polymerization',
    redirect: '/polymerization/point',
    children: [
      {
        name: 'pointPolymerization',
        path: '/polymerization/point',
        component: () => import ('../views/polymerization/polymerization.vue')
      }
    ]
  },
  {
    name: 'practices',
    path: '/practices',
    redirect: '/practices/perspectiveNavigation',
    children: [
      {
        name: 'perspectiveNavigation',
        path: '/practices/perspectiveNavigation',
        component: () => import ('../views/practices/perspectiveNavigation.vue')
      },
      {
        name: 'architecturalDifferentiation',
        path: '/practices/architecturalDifferentiation',
        component: () => import ('../views/practices/architecturalDifferentiation.vue')
      },
    ]
  },
];
