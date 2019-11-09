'use strict';

class SessionController {
	async store({ request, response, auth }) {
		const { email, password } = request.all();
		const token = await auth.attempt(email, password);

		return token;
	}

	async delete({ auth, response }) {
		await auth.logout();
	}

	async check({ auth, response }) {
		try {
			return await auth.getUser();
		} catch (error) {
			response.send('You are not logged in');
		}
	}
}

module.exports = SessionController;
