'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('nome', 120).notNullable().unique()
      table.string('email', 120).notNullable().unique()
      table.string('telefone', 40).notNullable()
      table.string('enderecoUsuario', 256).notNullable()
      table.string('password', 40).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
