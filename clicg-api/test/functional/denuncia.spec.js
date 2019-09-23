'use strict'

const { test } = use('Test/Suite')('Denuncia')

const Factory = use('Factory')

const Denuncia = use('../.././app/Models/Denuncia')

trait('Test/ApiClient')

test('do a report', async ({ assert }) => {
  const data = await Factory.model('../.././app/Models/Denuncia').create({
    protocolo: '4',
    foto: 'dasdas',
  });

  const response = await client
  .post('/denuncia')
  .send(data)
  .end()

  console.log('error', response.error)

  response.assertStatus(200)
  response.assertJSONSubset({
  protocolo: '4',
  foto: 'dasdas',
  })

})
