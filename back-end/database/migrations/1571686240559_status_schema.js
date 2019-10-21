'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StatusSchema extends Schema {
  up () {
    this.create('statusDenuncia', (table) => {
      table.increments()
      table.integer('denuncia_id').unsigned().references('id').inTable('denuncias')
      table.string('protocoloFalaCG', 256)
      table.date('dataStatus')
      table.integer('nStatus')
      table.timestamps()
    })
  }

  down () {
    this.drop('statusDenuncia')
  }
}

module.exports = StatusSchema
