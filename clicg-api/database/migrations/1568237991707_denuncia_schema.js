'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
var d = Date.now();

class DenunciaSchema extends Schema {
  up () {
    this.create('denuncias', (table) => {
      table.increments()
      //table.bigInteger('idUserDenuncia').notNullable().unique()
      table.bigInteger('idUserDenuncia').notNullable()//.unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')

      table.bigInteger('protocolo').notNullable().unique().defaultTo(d)
      table.string('foto', 256).notNullable()
      table.decimal('geo-lat', 9, 6)//.notNullable()
      table.decimal('geo-lng', 9, 6)//.notNullable()
      table.integer('intensidade').defaultTo(1)
      table.string('observacao', 256)
      table.date('data').notNullable()
      table.string('ip', 16)
      table.string('endereco', 256)//.notNullable()

      table.timestamps()
    })
  }


  down () {
    this.drop('denuncias')
  }
}

module.exports = DenunciaSchema
