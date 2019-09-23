export default {
  namespaced: true,
  state: {
    endereco: null,
    nome: null,
    observacao: null,
    image: null,
    intensidade: 1,
    telefone: null,
    status: "Aberto",
    protocolo: null,
    data: null,
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
    setProtocolo(state, value) {
      state.protocolo = value;
    },
    setData(state, value) {
      state.data = value;
    },
    setStatus(state, value){
      state.status = value
    }
  },
  actions: {

  }
};
