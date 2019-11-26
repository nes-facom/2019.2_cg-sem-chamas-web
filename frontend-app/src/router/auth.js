import Session from '../store/module/Session';
export default function authUser(to, from, next) {
  if (!localStorage.getItem('userToken') || Session.state.id == null) {
    next('/login');
  } else {
    next();
  }
}
