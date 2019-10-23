'use strict'
const User = use('App/Models/User')
class PermissionController {
    async store ({request,auth}){
        const data = request.only(['email','password','emailAlterar','permissionAlterar'])
        const email = data.email
        const password = data.password
        const emailAlterar = data.emailAlterar
        const permissionAlterar = data.permissionAlterar

        const token = await auth.attempt(email,password)

        const user = await User.findByOrFail('email',emailAlterar)

        user.permission = permissionAlterar
            
        await user.save()
        
        
        
        
        return user
    }
}

module.exports = PermissionController
