'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('app/Models/User', (faker) => {
    return {
        nome: faker.nome(),
        email: 'ab@gmail.com',
        password: '1234',
        telefone: '67998876655',
        enderecoUsuario: 'Rua A numero 100',
        cpf: '111222333344',
        permission: 1
    )
}
})