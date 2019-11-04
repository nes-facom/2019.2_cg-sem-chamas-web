'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class DenunciaSchema extends Schema {
	up() {
		this.create('denuncias', table => {
			table.increments();
			table
				.integer('user_id')
				.unsigned()
				.references('id')
				.inTable('users');
			table.bigInteger('protocolo').unique();
			table.text('foto').notNullable();
			table.decimal('geo-lat', 9, 6).notNullable();
			table.decimal('geo-lng', 9, 6).notNullable();
			table.integer('intensidade');
			table.string('observacao', 256);
			table.date('data').notNullable();
			table.string('ip', 16);
			table.string('endereco', 256).notNullable();
			table.string('status', 256).notNullable();
			table.string('telefone', 20);
			table.string('nome', 40);

			table.timestamps();
		});
	}

	down() {
		this.drop('denuncias');
	}
}

module.exports = DenunciaSchema;
