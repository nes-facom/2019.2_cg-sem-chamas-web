
const routes = [
 
{
    path: '/',
    component: () => import('layouts/TelaDenuncia.vue'),
    
  },
 
  {
    path: '/',
    component: () => import('pages/Index.vue'),
    children: [
      { path: '/denuncia', component: () => import('pages/FormularioDenuncia.vue'),
     }
    ]
      },


]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
