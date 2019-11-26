'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
	up() {
		this.create('users', table => {
			table.increments();
			table.string('nome', 120).notNullable();
			table
				.string('email', 120)
				.notNullable()
				.unique();
			table.string('telefone', 40);
			table.string('enderecoUsuario', 256);
			table.string('password', 257).notNullable();
			table.string('cpf', 15);
			table.bigInteger('permission');

			table.timestamps();
		});
	}

	down() {
		this.drop('users');
	}
}

module.exports = UserSchema;
