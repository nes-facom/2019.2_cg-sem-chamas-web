
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: 'info', component: () => import('pages/Info.vue') },
      { path: 'denuncias', component: () => import('pages/Denuncias.vue') },
      { path: 'noticias', component: () => import('pages/Noticias.vue') }
    ]
  },
  { path: '/login', component: () => import('pages/Login.vue') }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
