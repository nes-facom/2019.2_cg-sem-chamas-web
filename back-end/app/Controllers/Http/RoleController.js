'use strict';
const Role = use('Role');
class RoleController {
	async store({ request, auth }) {
		const { permissions, ...data } = request.only([
			'name',
			'slug',
			'description',
			'permissions'
		]);
		const role = await Role.create(data);
		if (permissions) {
			await role.permissions().attach(permissions);
		}

		await role.load('permissions');
		return role;
	}

	async update({ request, params }) {
		const { permissions, ...data } = request.only([
			'name',
			'slug',
			'description',
			'permissions'
		]);
		const role = await Role.findOrFail(params.id);
		role.merge(data);
		await role.save();

		if (permissions) {
			await role.permissions().sync(permissions);
		}

		await role.load('permissions');
		return role;
	}

	async destroy({ params }) {
		const role = await Role.findOrFail(params.id);
		role.delete();
	}

	async index() {
		const roles = await Role.query()
			.with('permissions')
			.fetch();
		return roles;
	}

	async show({ params }) {
		const role = await Role.findOrFail(params.id);
		await role.load('permissions');
		return role;
	}
}

module.exports = RoleController;
