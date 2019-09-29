<template>
  <div class="container">
    <div class="logo">
      <!-- <img src="https://i.imgur.com/RRsVyrd.png" width="120" /> -->
      <p class="titulo">CG SEM CHAMAS</p>
    </div>
    <div class="img-centro"></div>
    <div class="frase">
      <p>Denuncie uma queimada e ajude a natureza</p>
    </div>

    <div class="btn-denuncia">
      <q-btn color="white" push @click="$router.push('/denuncia/form')">
        <div class="row items-center no-wrap botao-denuncia">
          <div class="text-center text-primary text-weight-bold">Denunciar</div>
        </div>
      </q-btn>
    </div>

    <div class="login">
      <a href="/login" class="login" to="/404">ENTRAR NA CONTA</a>
    </div>
  </div>
</template>
<script>
import { openURL } from "quasar";
import { AddressbarColor } from "quasar";
export default {
  name: "TelaDenuncia"
};
</script>
<style scoped>
.container {
  display: flex;
  background: #f4853e;
  width: 100vw;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.logo {
  width: 320px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  margin-top: 5%;
  border-color: #f4853e;
  border-width: 1px;
  border-style: solid;
  width: 80%;
  padding: 1px 10px;
  border-radius: 50px;
}

.titulo {
  margin-top: 12px;
  font-size: 1.2em;
}

.img-centro {
  background-color: blue;
  background: url("https://i.imgur.com/sV8gZBV.png");
  background-size: 220px auto;
  width: 250px;
  height: 250px;
  border: 17px solid #f4853e;
  box-sizing: border-box;
}

.frase p {
  margin-top: 8%;
  width: 300px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
}

.login a:link {
  color: #fff;
  text-decoration: none;
}
.login a:visited {
  color: #fff;
  text-decoration: none;
}
.login a:hover {
  color: #fff;
  text-decoration: underline;
}
.login a:active {
  color: #fff;
  text-decoration: underline;
  background-color: #000000;
}

.btn-denuncia button {
  border-color: #f4853e;
  margin-top: 10%;
  height: 55px;
  width: 250px;
}

.login {
  width: 320px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  margin-top: 5%;
  text-align: center;

  color: #ffffff;
}
</style>
