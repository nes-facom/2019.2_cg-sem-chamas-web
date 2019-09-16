'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with denuncias
 */
const Denuncia = use('App/Models/Denuncia')

class DenunciaController {
  /**
   * Show a list of all denuncias.
   * GET denuncias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

      const denuncia = Denuncia.all()

      return denuncia

  }

  /**
   * Render a form to be used for creating a new denuncia.
   * GET denuncias/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new denuncia.
   * POST denuncias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, session, response }) {
    const data = request.only(["dUserDenuncia", "protocolo","foto","geo-lat","geo-lng","intensidade","observacao","data","ip","endereco"]);


    const denuncia = await Denuncia.create(data);

    return denuncia;
}













  /**
   * Display a single denuncia.
   * GET denuncias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const denuncia = await Denuncia.findOrFail(params.id)

    return denuncia
  }

  /**
   * Render a form to update an existing denuncia.
   * GET denuncias/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update denuncia details.
   * PUT or PATCH denuncias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    // const cliente = await Cliente.findOrFail(params.id);
    // const data = request.only(["nome", "e-mail"]);

    // cliente.merge(data);
    // await cliente.save();

    // return cliente
  }

  /**
   * Delete a denuncia with id.
   * DELETE denuncias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  //   const denuncia = await Denuncia.findOrFail(params.id)

  //   if (Denuncia.user_id !== auth.user.id) {
  //     return response.status(401).send({ error: 'Not authorized' })
  //   }

  //   await Denuncia.delete()
   }
}

module.exports = DenunciaController
