'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DenunciaSchema extends Schema {
  up () {
    this.create('denuncias', (table) => {
      table.increments()
      table.bigInteger('idUserDenuncia').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.bigInteger('protocolo').notNullable().unique()
      table.string('foto', 256).notNullable()
      table.decimal('geo-lat', 9, 6).notNullable()
      table.decimal('geo-lng', 9, 6).notNullable()
      table.integer('intensidade').defaultTo(1)
      table.string('observacao', 256)
      
      table.datetime('data', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.string('ip', 16)
      table.string('endereco', 256).notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('denuncias')
  }
}

module.exports = DenunciaSchema
