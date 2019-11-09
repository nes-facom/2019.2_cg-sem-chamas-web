const teste = false;
export default function authUser(to, from, next) {
  if (!localStorage.getItem('userToken')) {
    next('/login');
  } else {
    next();
  }
}
