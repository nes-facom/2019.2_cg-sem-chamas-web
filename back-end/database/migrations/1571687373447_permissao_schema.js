'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PermissaoSchema extends Schema {
  up () {
    this.create('permissoes', (table) => {
      table.integer('idPermissao')
      table.string('tipoUsuario', 256)
      table.timestamps()
    })
  }

  down () {
    this.drop('permissoes')
  }
}

module.exports = PermissaoSchema
