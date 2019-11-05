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
}

module.exports = SessionController;
