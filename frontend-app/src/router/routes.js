
const routes = [
  {
    path: '/',
    component: () => import('layouts/FormularioDenuncia.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
{
    path: '/tela',
    component: () => import('layouts/TelaDenuncia.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
{
    path: '/map',
    component: () => import('layouts/Map.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
{
    path: '/camera',
    component: () => import('layouts/Camera.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
