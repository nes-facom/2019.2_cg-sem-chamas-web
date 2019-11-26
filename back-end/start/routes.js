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

Route.get('/', () => {
  return { greeting: 'O sistema está online!' };
});

Route.post('denuncia', 'DenunciaController.store');

//Usuario_comum 4
//Usuario_Logado 3
//comite 2
//administrador 1

Route.get('denuncia/:id', 'DenunciaController.show').middleware([
  'auth',
  'is:(comite or administrador)'
]);

Route.get('protocolo/:protocolo', 'DenunciaController.byProtocolo');

//Buscar denuncias pelo id do usuario
Route.get('byUser/:userid', 'DenunciaController.byUser').middleware('auth');

//Retornar numero de denúncias
Route.get('total/', 'DenunciaController.count').middleware([
  'auth',
  'is:(comite or administrador)'
]);

//Listar usuarios
Route.get('users', 'UserController.index').middleware([
  'auth',
  'is:(comite or administrador)'
]);

Route.get('denuncias', 'DenunciaController.index').middleware([
  'auth',
  'is:(comite or administrador)'
]);

Route.put('denuncia/:id', 'DenunciaController.update').middleware([
  'auth',
  'is:(comite or administrador)'
]);

Route.delete('denuncia/:id', 'DenunciaController.destroy').middleware([
  'auth',
  'is:(comite or administrador)'
]);

//Verificar dados do usuários logado
Route.get('/checkUser', 'SessionController.check').middleware('auth');

//Registrar usuário
Route.post('/users', 'UserController.store');

//Buscar dados do usuario
Route.get('/userauth', 'UserController.show').middleware([
  'auth',
  'is:(comite or administrador)'
]);

//Atualizar dados de um usuários
Route.put('/users/:id', 'UserController.update').middleware([
  'auth',
  'is:(administrador)'
]);

Route.post('/sessions', 'SessionController.store');

Route.resource('/permissions', 'PermissionController')
  .apiOnly()
  .except(['index'])
  .middleware(['auth', 'is:(comite or administrador)']);

Route.get('/permissions', 'PermissionController.index');

Route.resource('roles', 'RoleController')
  .apiOnly()
  .middleware(['auth', 'is:(comite or administrador)']);

Route.post('usersReturn', 'UserReturnController.store').middleware([
  'auth',
  'is:(comite or administrador)'
]);

Route.put('/noticias/:id', 'NoticiaController.update').middleware([
  'auth',
  'is:(comite or administrador)'
]);

Route.delete('noticias/:id', 'NoticiaController.destroy').middleware([
  'auth',
  'is:(comite or administrador)'
]);

Route.post('/noticias', 'NoticiaController.store').middleware([
  'auth',
  'is:(comite or administrador)'
]);

Route.get('/noticias', 'NoticiaController.index').middleware(['auth']);

Route.post('/logout', 'SessionController.logout').middleware(['auth']);
