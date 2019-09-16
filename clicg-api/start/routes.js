'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/*Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})*/

Route.post('denuncia', 'DenunciaController.store')

Route.get('denuncia/:id', 'DenunciaController.show')

Route.get('denuncias', 'DenunciaController.index')

Route.put('denuncia/:id', 'DenunciaController.update')

Route.delete('denuncia/:id', 'DenunciaController.destroy')





