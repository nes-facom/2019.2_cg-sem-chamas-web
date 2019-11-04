'use strict';
const User = use('App/Models/User');
const Permission = use('Permission');
class PermissionController {
	async store({ request, auth }) {
		const data = request.only(['name', 'slug', 'description']);
		const permission = await Permission.create(data);
		return permission;
	}
}

module.exports = PermissionController;
