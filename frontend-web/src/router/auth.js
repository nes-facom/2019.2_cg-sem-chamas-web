export default (to, from, next, store) => {

}


export default (to, from, next, store) => {
  console.log(next)
  console.log('O usuário do store é:', store.getters.user)
  if (store.getters.user) {
    console.log('existe usuário', store.getters.user)
    if (store.getters.user.emailVerified === false) {
      console.log('email not verified, go to emailverification Page')
      next('/cadastro')
    } else {
      // console.log('teste rotas', to.fullPath.split('/'))
      // let type = to.fullPath.split('/')[1]
      // let id = to.fullPath.split('/')[2]
      // console.log('going to type / id')
      // console.log('Go to route', type + '/' + id)
      next()
    }
  } else {
    console.log('There isnt user logged, go to sign-up')
    next('/cadastro')
  }
}
