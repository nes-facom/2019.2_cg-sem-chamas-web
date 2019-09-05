export default {
  namespaced: true,
  state:{
        enderecoS: null,
        dialog: true
  },
  mutations:{
    updateEndereco (state, value) {
        state.enderecoS = value}
  },
    changeDialogg(state, value){
      state.dialog = value
    }
}
