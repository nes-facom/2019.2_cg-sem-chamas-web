'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NoticiaSchema extends Schema {
  up () {
    this.create('noticias', (table) => {
      table.increments()
      table.timestamps()
      table.string('titulo')
      table.text('descricao')
      table.text('conteudo')
      table.text('capa')
      table.integer('user_id').unsigned().notNullable()
      table.foreign('user_id').references('id').inTable('users')
      .onUpdate('CASCADE').onDelete('CASCADE')
    })
  }

  down () {
    this.drop('noticias')
  }
}

module.exports = NoticiaSchema
