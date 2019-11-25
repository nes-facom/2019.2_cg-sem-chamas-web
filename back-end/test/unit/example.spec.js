'use strict'

//const { test } = use('Test/Suite')('Example')

//test('make sure 2 + 2 is 4', async ({ assert }) => {
  //assert.equal(2 + 2, 4)
//})

//const { test, trait } = use('Test/Suite')('User registeration')

//trait(function (suite) {
//  suite.Context.getter('foo', () => {
//    return 'bar'
//  })
//})

//test('foo must be bar', async ({ sessions, assert }) => {
//  assert.equal(foo, 'bar')
//})

const client = use('App/Controllers/Http/SessionController')

const response = client
  .store('sessions')
  .send({
    email: 'Adonis 101',
    password: 'Post content'
  })
  .type('json')
  .accept('json')
  .end()

  response.assertText('He')