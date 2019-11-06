'use strict';

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
const Route = use('Route');

/*Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})*/

Route.post('denuncia', 'DenunciaController.store');

//.except([''])
//.middleware([''])
//Usuario_comum 4
//Usuario_Logado 3
//Comite 2
//Administrador 1

Route.get('denuncia/:id', 'DenunciaController.show');
// .middleware([
// 	'auth',
// 	'is:(Comite || Administrador)'
// ]);

Route.get('protocolo/:protocolo', 'DenunciaController.byProtocolo');

Route.get('total/', 'DenunciaController.count');
// .middleware([
// 	'auth',
// 	'is:(Comite || Administrador)'
// ]);

Route.get('denuncias', 'DenunciaController.index');
// .middleware([
// 	'auth',
// 	'is:(Comite || Administrador)'
// ]);

Route.put('denuncia/:id', 'DenunciaController.update');
// .middleware([
// 	'auth',
// 	'is:(Comite || Administrador)'
// ]);

Route.delete('denuncia/:id', 'DenunciaController.destroy').middleware(
	'auth'
	// 'is:(Comite || Administrador)'
);

Route.post('users', 'UserController.store');

Route.get('userauth', 'UserController.index');
// .middleware([
// 	'auth',
// 	'is:(Comite || Administrador)'
// ]);

Route.put('users/:id', 'UserController.update');
// .middleware([
// 	'auth',
// 	'is:(Comite || Administrador)'
// ]);

Route.post('sessions', 'SessionController.store');

Route.resource('permissions', 'PermissionController')
	.apiOnly()
	.except(['index']);

// .middleware(['auth', 'is:(Comite || Administrador)']);

Route.resource('roles', 'RoleController').apiOnly();

// .middleware(['auth', 'is:(Comite || Administrador)']);

Route.post('usersReturn', 'UserReturnController.store');
// .middleware([
// 	'auth',
// 	'is:(Comite || Administrador)'
// ]);

Route.put('/noticias/:id', 'NoticiaController.update');
// .middleware([
// 	'auth',
// 	'is:(Comite)'
// ]);

Route.delete('noticias/id', 'NoticiaController.destroy');
// .middleware([
// 	'auth',
// 	'is:(Comite)'
// ]);

Route.post('/noticias', 'NoticiaController.store');
// .middleware([
// 	'auth',
// 	'is:(Comite)'
// ]);

Route.get('/noticias', 'NoticiaController.index');
// .middleware(['auth']);

Route.get('/logout', 'SessionController.delete');
// .middleware('auth');

Route.get('/check', 'SessionController.check').middleware('auth');
