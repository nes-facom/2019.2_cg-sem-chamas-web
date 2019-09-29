"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with denuncias
 */
const Denuncia = use("App/Models/Denuncia");

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
  async index({ request, response, view }) {
    const denuncia = Denuncia.all();

    return denuncia;
  }

  /**
   * Show a list of all denuncias.
   * GET denuncias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async count({ request, response, view }) {
    const denuncia = await Denuncia.getCount()
    
    const total = {
       total: denuncia
    };

    return total;
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
  async create({ request, response, view }) {}

  /**
   * Create/save a new denuncia.
   * POST denuncias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, session, response }) {
    const data = request.only([
      "protocolo",
      "foto",
      "geo-lat",
      "geo-lng",
      "intensidade",
      "observacao",
      "data",
      "ip",
      "endereco",
      "status",
      "nome",
      "telefone",
    ]);
    //"dUserDenuncia",

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
  async show({ params, request, response, view }) {
    const denuncia = await Denuncia.findOrFail(params.id);
    return denuncia;
  }

  async byProtocolo({ params, request, response, view }) {
    const denuncia = await Denuncia.findBy("protocolo", params.protocolo);

    //Separando dados que eu quero retornar (SEGURANÇA)
    const { status, protocolo, created_at } = denuncia;

    //Criar JSON de com os dados de retorno
    const dados = {
      protocolo: protocolo,
      status: status,
      data: created_at,
    };

    return dados;
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
  async edit({ params, request, response, view }) {

  }

  /**
   * Update denuncia details.
   * PUT or PATCH denuncias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    // const cliente = await Cliente.findOrFail(params.id);
    // const data = request.only(["nome", "e-mail"]);
    // cliente.merge(data);
    // await cliente.save();
    // return cliente
    const property = await Denuncia.findOrFail(params.id)

    const data = request.only([
      "protocolo",
      "foto",
      "geo-lat",
      "geo-lng",
      "intensidade",
      "observacao",
      "data",
      "ip",
      "endereco",
      "status",
      "nome",
      "telefone",
    ])

  property.merge(data)

  await property.save()
  //console.log("update")

  return property
  }

  /**
   * Delete a denuncia with id.
   * DELETE denuncias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
      const denuncia = await Denuncia.findOrFail(params.id)
      // if (Denuncia.id !== denuncia.id) {
      //   return response.status(401).send({ error: 'Not authorized' })
      // }
      await denuncia.delete()
  }
}

module.exports = DenunciaController;
