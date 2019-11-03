<template>
  <div
    class="sign-up"
    style="height: 100vh;
  width: 100vw;"
  >
    <h4>CG sem chamas</h4>

    <div class="SignUp">
      <h6>Cadastrar-se</h6>

      <div class="inputs">
        <q-input outlined v-model="text" label="Nome completo">
          <template v-slot:prepend>
            <q-icon name="person_add" />
          </template>
        </q-input>
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

        <q-input outlined v-model="text" label="Confirmar senha">
          <template v-slot:prepend>
            <q-icon name="lock" />
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
              <div class="closePop">
                <q-btn flat label="X" v-close-popup to="/denuncia/buscar" />
              </div>
              <q-card-section>
                <q-icon
                  class="iconDenunciaRegistrada"
                  name="fas fa-check-circle"
                  style="font-size: 40px;"
                ></q-icon>
                <div class="popupDenunciaRegistrada">Sucesso!</div>
              </q-card-section>
            </div>
            <div class="infoProtocolo">
              <div class="text">Cadastro realizado com sucesso.</div>
              <div class="btn-cadastrar">
                <q-btn label="OK" color="primary" to="/login" />
              </div>
            </div>
          </q-card>
          <!-- </div> -->
        </q-dialog>
      </div>
      <a href="/login" class="login" to="/login">RETORNAR LOGIN</a>
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
  font-family: "Robotos lab";
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
p {
  color: #737373;
  margin-top: 40px;
  font-size: 13px;
  margin: 4%;
}
h6 {
  color: #737373;
  margin: 4%;
}
a {
  margin: 4%;
}
.closePop {
  text-align: end;
  color: #ffffff;
  font-size: 20px;
}
.btn-registrar button {
  border-color: #f4853e;
  margin-top: 10%;
  margin-bottom: 30px;
  height: 55px;
  width: 250px;
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
  padding: 5%;
  color: #737373;
}
</style>
