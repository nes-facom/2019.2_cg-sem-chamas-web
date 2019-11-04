<template>
  <div
    class="login"
    style="height: 100vh;
  width: 100vw;"
  >
    <h4>CG sem chamas</h4>

    <div class="loginIn">
      <h6>Login</h6>

      <div class="inputs">
        <q-input outlined v-model="text" label="Email">
          <template v-slot:prepend>
            <q-icon name="mail" />
          </template>
        </q-input>

        <q-input outlined v-model="text" label="Senha">
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>
      </div>

      <div class="btn-login">
        <q-btn color="primary">ENTRAR</q-btn>
      </div>
      <p>
        Não possui uma conta?
        <a href="/registrar" class="registrar" to="/registrar">CRIAR CONTA</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
  background-color: #f4853e;
}
.loginIn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
  background-color: #ffffff;
  width: 88%;
  border-radius: 2.2%;
  margin-top: 10%;
}
h4 {
  font-family: "Robotos lab";
  font-weight: bolder;
  color: #ffffff;
}
.inputs .q-input {
  margin-top: 1%;
  margin-bottom: 5%;
  width: 250px;
}
.inputs .q-icon {
  color: #f4853e;
  margin-top: 5%;
}
button {
  border-color: #f4853e;
  margin-top: 10%;
  height: 55px;
  width: 250px;
}
p {
  color: #737373;
  margin-top: 40px;
  font-size: 13px;
}
h6 {
  color: #737373;
  margin: 3%;
}
</style>
