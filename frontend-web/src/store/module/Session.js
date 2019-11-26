export default {
  namespaced: true,
  state: {
    id: null,
    email: "",
    nome: "",
    password: "",
    token: "",
    telefone: "",
    permission: ""
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
    },
    updateTelefone(state, value) {
      state.telefone = value;
    },
    updateId(state, value) {
      state.id = value;
    }
  }
};
