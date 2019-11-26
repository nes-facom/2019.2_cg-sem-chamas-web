'use strict';

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const User = use('App/Models/User');
const Database = use('Database');

class UserSeeder {
  async run() {
    // await Database.table('users').insert([
    //   {
    //     id: 10,
    //     nome: 'Administrador',
    //     email: 'admin@cgsemchamas.com',
    //     password: '3OjzYjzK',
    //     telefone: '671111111',
    //     enderecoUsuario: 'Rua A numero 100',
    //     cpf: '11111111111'
    //   }
    // ]);
    // await Database.table('role_user').insert([
    //   {
    //     id: 10,
    //     user_id: 10,
    //     role_id: 1
    //   }
    // ]);
  }
}
module.exports = UserSeeder;
