'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Noticia = use('App/Models/Noticia')
/**
 * Resourceful controller for interacting with noticias
 */
class NoticiaController {
  /**
   * Show a list of all noticias.
   * GET noticias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let noticias = await Noticia.query().with('user').fetch()
return response.json(noticias)
  }

  /**
   * Render a form to be used for creating a new noticia.
   * GET noticias/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new noticia.
   * POST noticias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try {

      let noticia = await auth.user.noticias().create(request.all())
      await noticia.load('user');
      return response.json(noticia)
    
    } catch (e) {
      console.log(e)
      return response.json({message: 'Você não pode executar essa ação!'})
    }
  }


  /**
   * Display a single noticia.
   * GET noticias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing noticia.
   * GET noticias/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update noticia details.
   * PUT or PATCH noticias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let noticia = await Noticia.find(params.id)
    const data = request.only([
      "titulo",
      "descricao",
      "capa",
      "conteudo"
    ])

  await noticia.merge(data);

await noticia.save()
await noticia.load('user');

return response.json(noticia)
  }

  /**
   * Delete a noticia with id.
   * DELETE noticias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    await Noticia.find(params.id).delete()

return response.json({message: 'Notícia deletada!'})
  }
}

module.exports = NoticiaController
