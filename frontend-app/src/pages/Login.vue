<template>
  <div class="login" style="height: 100vh;
  width: 100vw;">
    <q-icon name="arrow_back_ios" class="voltar text-white" @click="voltar()" />
    <div class="topo">
      <div class="img-centro"></div>
    </div>

    <div class="loginIn">
      <h6>Fazer login</h6>

      <div class="inputs">
        <q-input class="qinput" label="E-mail" v-model="email" />
        <!-- <template v-slot:prepend>
            <q-icon name="mail" />
          </template>
        </q-input>-->
        <q-input
          class="qinput"
          :type="isPwd ? 'password' : 'text'"
          label="Senha"
          v-model="password"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </div>

      <div class="btn-login">
        <q-btn outline color="primary" label="Login" to="/home" />
      </div>
      <p>
        Não possui uma conta?
        <a href="/registrar" class="registrar" to="/registrar">CRIAR CONTA</a>
      </p>
    </div>
  </div>
</template>

<script>
import User from "../boot/login";
export default {
  data() {
    return {
      email: "",
      password: "",
      token: "",
      isPwd: true
    };
  },
  methods: {
    logar() {
      const vm = this;
      const login = {
        email: this.email,
        password: this.password
      };

      User.logar(login)
        .then(response => {
          console.log(response);
          console.log(response.data.token);

          vm.token = response.data.token;
          vm.$router.push("/");
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
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
.topo {
  margin-top: 50px;
  margin-bottom: 20px;
}
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
  background-color: #f4853e;
}
.voltar {
  position: absolute;
  top: 20px;
  left: 20px;
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
  margin-top: 0px;
  padding: 20px 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
h7 {
  font-family: "Arial";
  /* font-weight: bolder; */
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 5px;
}
.inputs .q-input {
  margin-top: 1%;
  margin-bottom: 5%;
  width: 250px;
}
.btn-login {
  padding: 20px 0px;
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
.p1 {
  color: white;
  margin-top: 0px;
  margin-bottom: 20px;
  font-size: 20px;
}
p {
  color: #737373;
  margin-top: 0px 20px;
  font-size: 13px;
}
h6 {
  color: black;
  margin: 3%;
}
.img-centro {
  background-color: blue;
  background: url("https://i.imgur.com/h20GKNd.png");
  background-size: 140px auto;
  width: 140px;
  height: 140px;
  /* border: 17px solid #f4853e; */
  box-sizing: border-box;
  margin: 0px;
  margin-bottom: 10px;
}
</style>
