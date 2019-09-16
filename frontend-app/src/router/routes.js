const routes = [
// <<<<<<< HEAD
 
{
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'camera', component: () => import('pages/Camera.vue') },
      { path: 'gps', component: () => import('pages/Map.vue') },
      { path: 'formulario', component: () => import('pages/FormularioDenuncia.vue') }
    ] 
  }, 

// =======
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
// >>>>>>> develop

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
