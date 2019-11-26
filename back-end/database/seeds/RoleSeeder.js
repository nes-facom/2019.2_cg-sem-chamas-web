'use strict';

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Database = use('Database');
class RoleSeeder {
  async run() {
    await Database.table('roles').insert([
      {
        id: 1,
        name: 'Administrador',
        slug: 'administrador',
        description: 'Administrador do sistema com todas as permissões'
      },

      {
        id: 2,
        name: 'Membro do Comitê',
        slug: 'comite',
        description: 'Membro do Comitê com as permissões principais do sistema.'
      },

      {
        id: 3,
        name: 'Usuario Identificado',
        slug: 'user_with_login',
        description: 'Usuario que se cadastrou no sistema.'
      },

      {
        id: 4,
        name: 'Usuario Comum',
        slug: 'user_without_login',
        description: 'Usuario que não se identificou'
      }
    ]);
  }
}

module.exports = RoleSeeder;
