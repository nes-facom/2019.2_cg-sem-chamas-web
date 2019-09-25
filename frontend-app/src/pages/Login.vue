<template>
  <div class="login">
    <h1>Login</h1>
    <q-input type="text" placeholder="Email"></q-input>
    <q-input type="password" placeholder="Senha"></q-input>
    <div class="btn-login">
      <q-btn>Login</q-btn>
    </div>
    <p>
      Você não tem conta?
      <a href>Crie uma conta</a>
    </p>
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
  margin-top: 40px;
}
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
