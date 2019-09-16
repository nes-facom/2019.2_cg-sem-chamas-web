'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DenunciaSchema extends Schema {
  up () {
    this.create('denuncias', (table) => {
      table.increments()
      table.string('protocolo', 80).notNullable().unique()
      table.string('foto', 60).notNullable()
      table.string('geo', 60).notNullable()
      table.string('intensidade', 60).notNullable()


      table.timestamps()
    })
  }

  down () {
    this.drop('denuncias')
  }
}

module.exports = DenunciaSchema
