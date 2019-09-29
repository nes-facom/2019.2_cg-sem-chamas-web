<template>
  <div class="sign-up" style="height: 100vh;
  width: 100vw;">
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

      <div class="btn-registrar">
        <q-btn color="primary">REGISTRAR</q-btn>
      </div>
      <a href="/login" class="login" to="/login">RETORNAR LOGIN</a>
    </div>
  </div>
</template>

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
</style>
