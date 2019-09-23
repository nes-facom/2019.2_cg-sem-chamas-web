export default {
  namespaced: true,
  state: {
    dialogg: false,
  },
  mutations: {
    changeDialogg(state, value) {
      state.dialogg = value;
    },
  },
};
