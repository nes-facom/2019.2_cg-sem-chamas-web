const routes = [
  {
    path: "/",
    component: () => import("layouts/TelaDenuncia.vue")
  },

  {
    path: "/d",
    component: () => import("pages/Denuncias.vue")
  },

  {
    path: "/",
    component: () => import("pages/Index.vue"),
    children: [
      {
        path: "/denuncia",
        component: () => import("layouts/FormularioDenuncia.vue")
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
