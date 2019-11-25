'use strict';

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

Factory.blueprint('App/Models/User', faker => {
  return {
    nome: 'Administrador',
    email: 'admin@cgsemchamas.com',
    password: '3OjzYjzK',
    telefone: '671111111',
    enderecoUsuario: 'Rua A numero 100',
    cpf: '11111111111',
    permission: 1
  };
});
