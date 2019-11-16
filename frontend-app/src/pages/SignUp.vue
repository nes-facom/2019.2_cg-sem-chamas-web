<template>
  <div
    class="sign-up"
    style="height: 100vh;
  width: 100vw;"
  >
    <q-icon name="arrow_back_ios" class="voltar text-white" @click="voltar()" />

    <div class="topo">
      <div class="img-centro"></div>
    </div>
    <div class="SignUp">
      <h6>Cadastrar-se</h6>

      <div class="inputs">
        <q-input class="qinput" label="Nome completo" v-model="text" />

        <q-input class="qinput" label="E-mail" v-model="email" />

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
        <!-- <q-input
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
        </q-input>-->
        <q-input v-model="number" type="number" label="Telefone" />
      </div>
      <div class="btn-registrar">
        <q-btn outline color="primary" label="Registrar" @click="checkForm" />

        <!-- <q-btn label="Registrar" color="primary" @click="small = true" /> -->
        <q-dialog v-model="small">
          <q-card class="popRegistrar">
            <div class="denunciaRegistradaTopo" style="width: 300px">
              <q-card-section>
                <div class="closePop">
                  <q-btn flat label="X" v-close-popup to="/TelaDenuncia" />
                </div>
                <q-icon
                  class="iconDenunciaRegistrada"
                  name="fas fa-check-circle"
                  style="font-size: 40px;"
                ></q-icon>
                <div class="popupDenunciaRegistrada">Sucesso!</div>
              </q-card-section>
            </div>
            <div class="infoProtocolo">
              <p>Cadastro realizado com sucesso.</p>
              <div class="btn-ok">
                <q-btn label="OK" color="primary" to="/login" />
              </div>
            </div>
          </q-card>
          <!-- </div> -->
        </q-dialog>
      </div>
      <a href="/login" class="login" to="/login">
        <p>RETORNAR LOGIN</p>
      </a>
    </div>
  </div>
</template>
<script>
import User from '../boot/login';
export default {
  data() {
    return {
      small: false,
      medium: false,
      fullWidth: false,
      fullHeight: false,
      errors: [],
      text: null,
      email: null,
      password: null,
      number: null,
      token: '',
      isPwd: true
    };
  },
  methods: {
    checkForm: function(e) {
      if (this.text && this.email && this.password && this.number) {
        return this.registrar();
      }

      this.errors = [];
      if (!this.text) {
        this.errors.push('O nome é obrigatório.');
      }

      if (!this.email) {
        this.errors.push('O e-mail é obrigatório.');
      }
      if (!this.password) {
        this.errors.push('A senha é obrigatória.');
      }

      if (!this.telefone) {
        this.errors.push('O telefone é obrigatório.');
      }

      let i = 0;
      for (i = 0; i < this.errors.length; i++) {
        this.$q.notify(this.errors[i]);
      }

      e.preventDefault();
    },
    registrar() {
      const vm = this;
      const registrar = {
        nome: this.text,
        email: this.email,
        password: this.password,
        telefone: this.number,
        permission: 4
      };

      User.registrar(registrar)
        .then(response => {
          vm.$router.push('/login');
        })
        .catch(e => {
          this.$q.notify('Usuário ja existe!');
        });
    },
    voltar() {
      window.history.back();
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
.voltar {
  position: absolute;
  top: 20px;
  left: 20px;
}
.sign-up {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
  background-color: #f4853e;
}
.SignUp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
  background-color: #ffffff;
  width: 88%;
  border-radius: 2.2%;
  margin-top: 0px;
  margin-bottom: 20px;
}
h4 {
  font-family: 'Robotos lab';
  font-weight: bolder;
  color: #ffffff;
  margin-top: 5%;
  margin-bottom: 5%;
}
.inputs .q-input {
  padding-top: 1px;
  padding-bottom: 1px;
  margin-top: 1px;
  margin-bottom: 1px;
  width: 250px;
}

q-card_section {
  padding: 0px;
}
.inputs .q-icon {
  color: #f4853e;
  margin-top: 5%;
}
/* .qinput {
  padding-top: 1px;
  padding-bottom: 1px;
} */
button {
  border-color: #f4853e;
  margin-top: 3%;
  margin-bottom: 3%;
  height: 55px;
  width: 250px;
}
h6 {
  color: black;
  margin: 4%;
}
p {
  margin-top: 15px;
  font-size: 13px;
  margin-bottom: 20px;
}

.btn-registrar button {
  border-color: #f4853e;
  margin-top: 10%;
  margin-bottom: 3px;
  height: 55px;
  width: 250px;
}
.q-card__section {
  padding: 0px;
}
.btn-ok .q-btn {
  border-color: #f4853e;
  margin-top: 2%;
  height: 30px;
  width: 50px;
  padding-bottom: 20%;
}
.popRegistrar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
}
.closePop {
  text-align: end;
  color: #f4853e;
  font-size: 14px;
}
.closePop .q-btn {
  padding: 0px 30px 0px 0px;
}
.iconDenunciaRegistrada {
  color: #f4853e;
}
.popupDenunciaRegistrada {
  left: 10%;
  right: 10%;
  top: 100%;
  bottom: 0%;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #737373;
}
.infoProtocolo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
  padding: 1%;
  color: #737373;
}
.img-centro {
  background-color: blue;
  background: url('https://i.imgur.com/h20GKNd.png');
  background-size: 140px auto;
  width: 140px;
  height: 140px;
  /* border: 17px solid #f4853e; */
  box-sizing: border-box;
  margin: 0px;
  margin-bottom: 10px;
}
.topo {
  margin-top: 50px;
  margin-bottom: 0px;
}
a:link {
  text-decoration: none;
  color: #f4853e;
}

a:visited {
  text-decoration: none;
  color: #f4853e;
}

a:hover {
  text-decoration: none;
  color: #737373;
}

a:active {
  text-decoration: none;
  color: #737373;
}
</style>
