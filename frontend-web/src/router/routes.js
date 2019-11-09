import authUser from './auth';
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
        beforeEnter: (to, from, next) => authUser(to, from, next),
        component: () => import('pages/Home.vue')
      },
      {
        path: 'info',
        component: () => import('pages/Info.vue'),
        beforeEnter: (to, from, next) => authUser(to, from, next)
      },
      {
        path: 'denuncias',
        component: () => import('pages/Denuncias.vue'),
        beforeEnter: (to, from, next) => authUser(to, from, next)
      },

      {
        path: 'noticias',
        component: () => import('pages/Noticias.vue'),
        beforeEnter: (to, from, next) => authUser(to, from, next)
      },
      {
        path: 'gerenciarnoticias',
        component: () => import('pages/Gerenciar/Noticias.vue'),
        beforeEnter: (to, from, next) => authUser(to, from, next)
      },
      {
        path: 'gerenciarusuarios',
        component: () => import('pages/Gerenciar/Usuarios.vue'),
        beforeEnter: (to, from, next) => authUser(to, from, next)
      },
      {
        path: 'permissions',
        component: () => import('pages/Gerenciar/Permissões.vue'),
        beforeEnter: (to, from, next) => authUser(to, from, next)
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/Login.vue')
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
    beforeEnter: (to, from, next) => authUser(to, from, next)
  });
}

export default routes;
