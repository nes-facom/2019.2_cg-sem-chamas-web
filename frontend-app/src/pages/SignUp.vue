<template>
  <div
    class="sign-up"
    style="height: 100vh;
  width: 100vw;"
  >
    <q-icon name="arrow_back_ios" class="voltar text-white" @click="voltar()" />

    <h4>CG sem chamas</h4>

    <div class="SignUp">
      <h6>Cadastrar-se</h6>

      <div class="inputs">
        <q-input outlined v-model="text" label="Nome completo">
          <template v-slot:prepend>
            <q-icon name="person_add" />
          </template>
        </q-input>
        <q-input outlined v-model="email" label="Email">
          <template v-slot:prepend>
            <q-icon name="mail" />
          </template>
        </q-input>

        <q-input
          outlined
          :type="isPwd ? 'password' : 'text'"
          label="Senha"
          v-model="password"
        >
          <template v-slot:prepend>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <q-input
          outlined
          :type="isPwd ? 'password' : 'text'"
          label="Confirmar senha"
          v-model="password"
        >
          <template v-slot:prepend>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </div>

      <!-- <div class="btn-registrar">
        <q-btn label="REGISTRAR" color="primary" @click="small = true" />
        <q-dialog v-model="small">
          <q-card class style="width: 300px">
            <q-card-section>
              <div class="closePop">
                <q-btn flat label="X" v-close-popup to="/TelaDenuncia" />
              </div>
              <q-card-section>
                <q-icon
                  class="iconDenunciaRegistrada"
                  name="fas fa-check-circle"
                  style="font-size: 50px;"
                ></q-icon>
                <div class="popupUserRegistrado">Sucesso!</div>
              </q-card-section>
            </q-card-section>
            <q-card-section>Cadastro realizado com sucesso.</q-card-section>

            <q-card-actions align="right" class="bg-white text-teal">
              <q-btn flat label="OK" v-close-popup to="/login" />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>-->
      <div class="btn-registrar">
        <q-btn label="Registrar" color="primary" @click="small = true" />
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
export default {
  data() {
    return {
      small: false,
      medium: false,
      fullWidth: false,
      fullHeight: false
    };
  },
  methods: {
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
  margin-top: 10%;
}
h4 {
  font-family: 'Robotos lab';
  font-weight: bolder;
  color: #ffffff;
  margin-top: 5%;
  margin-bottom: 5%;
}
.inputs .q-input {
  margin-top: 1%;
  margin-bottom: 5%;
  width: 250px;
}

q-card_section {
  padding: 0px;
}
.inputs .q-icon {
  color: #f4853e;
  margin-top: 5%;
}
button {
  border-color: #f4853e;
  margin-top: 3%;
  margin-bottom: 3%;
  height: 55px;
  width: 250px;
}
h6 {
  color: #737373;
  margin: 4%;
}
p {
  margin-top: 1%;
  font-size: 13px;
  margin-bottom: 5%;
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
</style>
