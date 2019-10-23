<template>
  <div class="homeLogged" style="height: 100vh;
  width: 100vw;">
    <div class="toolbarLogado">
      <q-card>
        <q-tabs
          class="tabs"
          active-color="primary"
          v-model="tab"
          dense
          indicator-color="primary"
          narrow-indicator
        >
          <q-tab name="home" icon="home" label="Home" />
          <q-tab name="minhasDenuncias" icon="fas fa-bullhorn" label="Minhas denúncias" />
          <q-tab name="noticias" icon="far fa-newspaper" label="Notícias" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="home">
            <!-- <div class="text-h6">Mails</div>Lorem ipsum dolor sit amet consectetur adipisicing elit. -->
            <div class="containerHome">
              <div class="logo"></div>
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
            </div>
          </q-tab-panel>

          <q-tab-panel name="minhasDenuncias">
            <div class="text-h6">Alarms</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="noticias">
            <div class="text-h6">Movies</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import { openURL } from "quasar";
import { AddressbarColor } from "quasar";
export default {
  name: "TelaDenuncia",
  data() {
    return {
      tab: "mails"
    };
  }
};
</script>
<style scoped>
.homeLogged {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
  background-color: #f4853e;
}
.toolbar {
  align-items: center;
  justify-content: center;
  flex-direction: line;
  text-align: center;
  background-color: #616161;
  color: #ffffff;
}
.toolbarLogado {
  width: 100%;
  height: 110px;
  justify-content: space-around;
}
.tabs {
  background-color: #616161;
  padding: 3px 3px;
  /* height: 120px; */
}
.tabs .q-tab {
  color: #ffffff;
  padding: 3px 3px;
}
.q-tab-panel {
  padding: 0px;
}
/* ******************TELA HOME********************* */
.containerHome {
  display: flex;
  background: #f4853e;
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
  margin-top: 3%;
  background-color: blue;
  background: url("https://i.imgur.com/sV8gZBV.png");
  background-size: 230px auto;
  width: 250px;
  height: 250px;
  /* border: 17px solid #f4853e; */
  box-sizing: border-box;
}

.frase p {
  /* margin-top: 8%; */
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
/* *********************************************** */
</style>
