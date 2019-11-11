export default {
  namespaced: true,
  state: {
    email: '',
    nome: '',
    password: '',
    token: '',
    permission: ''
  },
  mutations: {
    updateNome(state, value) {
      state.nome = value;
    },
    updatePermission(state, value) {
      state.permission = value;
    },
    updateEmail(state, value) {
      state.email = value;
    }
  }
};
