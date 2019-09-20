const routes = [
  {
    path: "/denuncia",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      { path: "denuncia", component: () => import("layouts/TelaDenuncia.vue") },
      { path: "gps", component: () => import("pages/Map.vue") },
      { path: "form", component: () => import("pages/FormularioDenuncia.vue") },
      { path: "teste", component: () => import("pages/Denuncias.vue") },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/TelaDenuncia.vue"),
  },
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue"),
  });
}

export default routes;
