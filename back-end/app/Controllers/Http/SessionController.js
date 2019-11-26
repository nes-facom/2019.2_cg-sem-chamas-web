'use strict';
const User = use('App/Models/User');
class SessionController {
  async store({ request, response, auth }) {
    const { email, password } = request.all();
    const token = await auth.attempt(email, password);

    return token;
  }

  async logout({ response, auth }) {
    let user = auth.user;
    await auth.authenticator('api').revokeTokensForUser(user);
    return response.status(204).send(null);
  }

  async check({ auth, response }) {
    try {
      const check = await auth.getUser();
      const user = await User.findOrFail(check.id);

      await user.loadMany(['roles', 'permissions']);
      return user;
    } catch (error) {
      response.send('Usuário não está logado.');
    }
  }
}

module.exports = SessionController;
