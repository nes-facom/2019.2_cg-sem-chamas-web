import User from '../../boot/login';
export default {
  namespaced: true,
  state: {
    email: '',
    nome: '',
    token: 'TOKEN INVÁLIDO'
  },
  mutations: {
    setEmail(state, value) {
      state.email = value;
    },
    setToken(state, value) {
      state.token = value;
    }
  },
  actions: {
    check() {
      console.log($store);
      User.check()
        .then(response => {
          console.log(response.data);
        })
        .catch(e => {
          console.log(e.response.data.errors);
        });
    }
  },
  getters: {
    token: state => {
      return state.token;
    }
  }
};
