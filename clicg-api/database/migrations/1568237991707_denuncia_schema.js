'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DenunciaSchema extends Schema {
  up () {
    this.create('denuncias', (table) => {
      table.increments()
     
      //table.bigInteger('idUserDenuncia').notNullable().unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.bigInteger('idUserDenuncia').notNullable()

      table.bigInteger('protocolo').notNullable().unique()
      table.string('foto', 256).notNullable()
      table.decimal('geo-lat', 9, 6)
      table.decimal('geo-lng', 9, 6)
      table.integer('intensidade').defaultTo(1)
      table.string('observacao', 256)
      
      table.date('data').notNullable()
      table.string('ip', 16)
      table.string('endereco', 256)

      table.timestamps()
    })
  }

  down () {
    this.drop('denuncias')
  }
}

module.exports = DenunciaSchema
