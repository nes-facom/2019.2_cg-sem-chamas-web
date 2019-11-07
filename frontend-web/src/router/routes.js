const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Login.vue')
      },
      {
        path: 'home',
        component: () => import('pages/Home.vue')
      },
      {
        path: 'info',
        component: () => import('pages/Info.vue')
      },
      {
        path: 'denuncias',
        component: () => import('pages/Denuncias.vue')
      },

      {
        path: 'noticias',
        component: () => import('pages/Noticias.vue')
      },
      {
        path: 'gerenciarnoticias',
        component: () => import('pages/Gerenciar/Noticias.vue')
      },
      {
        path: 'gerenciarusuarios',
        component: () => import('pages/Gerenciar/Usuarios.vue')
      },
      {
        path: 'permissions',
        component: () => import('pages/Gerenciar/Permissões.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('pages/Login.vue')
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
