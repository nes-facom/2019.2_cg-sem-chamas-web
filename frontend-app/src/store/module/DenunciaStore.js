export default {
  namespaced: true,
  state: {
    endereco: null,
    nome: null,
    observacao: null,
    image: null,
    intensidade: 1,
    telefone: null,
  },
  mutations: {
    setEndereco(state, value) {
      state.endereco = value;
    },
    setNome(state, value) {
      state.nome = value;
    },
    setObservacao(state, value) {
      state.observacao = value;
    },
    setImage(state, value) {
      state.image = value;
    },
    setIntensidade(state, value) {
      state.intensidade = value;
    },
    setTelefone(state, value) {
      state.telefone = value;
    },
  },
};
