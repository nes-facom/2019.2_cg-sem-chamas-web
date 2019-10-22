'use strict'

const User = use('App/Models/User')

class UserController {
    async store ({request}){
        const data = request.only(['nome','email','password','enderecoUsuario','telefone'])
        
        const user = await User.create(data)
        return user
    }
    

}

module.exports = UserController
