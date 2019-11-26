import auth from "./auth";
const routes = [
  {
    path: "/denuncia",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      { path: "denuncia", component: () => import("layouts/TelaDenuncia.vue") },
      { path: "gps", component: () => import("pages/Map.vue") },
      { path: "form", component: () => import("pages/FormularioDenuncia.vue") },
      { path: "buscar", component: () => import("pages/Protocolo.vue") }
    ]
  },
  {
    path: "/buscar",
    component: () => import("pages/Protocolo.vue")
  },

  {
    path: "/login",
    component: () => import("pages/Login.vue")
  },

  {
    path: "/registrar",
    component: () => import("pages/SignUp.vue")
  },

  {
    path: "/",
    component: () => import("layouts/TelaDenuncia.vue")
  },

  {
    path: "/home",
    component: () => import("layouts/Principal.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/HomeLogged.vue"),
        beforeEnter: (to, from, next) => auth(to, from, next)
      }
    ]
  },

  { path: "/registrar", component: () => import("pages/SignUp.vue") }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
