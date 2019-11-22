'use strict';

const User = use('App/Models/User');

class UserController {
  async index({ request, response, view }) {
    const user = User.all();

    return user;
  }

  async store({ request }) {
    const { permissions, roles, ...data } = request.only([
      'nome',
      'email',
      'password',
      'enderecoUsuario',
      'telefone',
      'permissions',
      'roles'
    ]);
    const user = await User.create(data);

    if (roles) {
      await user.roles().attach(roles);
    }

    if (permissions) {
      await user.permissions().attach(permissions);
    }
    await user.loadMany(['roles', 'permissions']);

    return user;
  }

  async update({ request, params }) {
    const { permissions, roles, ...data } = request.only([
      'nome',
      'email',
      'password',
      'enderecoUsuario',
      'telefone',
      'permissions',
      'roles'
    ]);
    const user = await User.findOrFail(params.id);
    user.merge(data);
    user.save();

    if (roles) {
      await user.roles().sync(roles);
    }

    if (permissions) {
      await user.permissions().sync(permissions);
    }

    await user.loadMany(['roles', 'permissions']);

    return user;
  }

  async show({ auth }) {
    const { id, nome, email, permission } = await User.findOrFail(auth.user.id);
    const data = { id, nome, email, permission };
    return data;
  }
}

module.exports = UserController;
