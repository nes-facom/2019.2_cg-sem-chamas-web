'use strict';

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
			return await auth.getUser();
		} catch (error) {
			response.send('Usuário não está logado.');
		}
	}
}

module.exports = SessionController;
