'use strict'

const User = use('App/Models/User')

class UserReturnController {
    async store({request,response,auth}){
        const {email} = request.all()

        //const user = await auth.attempt(email,password)
        const user = await User.findByOrFail('email',email)
        
        
        return user
    }
}

module.exports = UserReturnController
