<template>
  <div
    class="homeLogged"
    style="height: 100vh;  width: 100vw;"
    v-bind:class="isHome"
  >
    <div class="toolbarLogado">
      <q-tabs
        class="tabs"
        active-color="primary"
        v-model="tab"
        dense
        indicator-color="primary"
        narrow-indicator
      >
        <q-tab name="home" icon="home" label="Home" />
        <q-tab
          name="minhasDenuncias"
          icon="fas fa-bullhorn"
          label="Minhas denúncias"
        />
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
                  <div class="text-center text-primary text-weight-bold">
                    Denunciar
                  </div>
                </div>
              </q-btn>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="minhasDenuncias" class="denuncias">
          <div class="card">
            <div class="denunciaTitulo">Minhas denúncias</div>
            <div class="line"></div>
            <div class="denunciaInfo">
              <div class="denunciaDados">
                <div class="denunciaProtocolo">
                  00000000000000
                </div>
                <div class="denunciaData">10/11/2019 21:90</div>
                <div class="denunciaStatus">Fechada</div>
              </div>

              <div class="denunciaEndereco">
                Avenida Afonso Pena, 432 - Campo Grande-MS 79092-123
              </div>
            </div>
            <div class="line"></div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="noticias">
          <div class="noticias">
            <q-card class="my-card" style="width: 90%;">
              <img
                src="data:image/jpeg;base64,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"
              />
              <div class="noticiaInfo">
                <div>
                  <div class="noticiaTitulo">
                    QUEIMADAS PODEM DESLIGAR CIDADES
                  </div>
                </div>

                <div class="noticiaDados">
                  <div class="noticiaData">NOV<br />17</div>
                  <div class="noticiaTexto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>
            </q-card>
          </div>
        </q-tab-panel>
      </q-tab-panels>
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
      tab: "home",
      isHome: "bg_orange"
    };
  },

  watch: {
    tab: function() {
      if (this.tab == "home") {
        this.isHome = "bg_orange";
      } else this.isHome = "bg_white";
    }
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
}

.bg_orange {
  background: #f4853e;
}

.bg_white {
  background: #fff;
}

.toolbar {
  align-items: center;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  background-color: #616161;
}
.toolbarLogado {
  width: 100%;
  height: 110px;
}
.tabs {
  background-color: #616161;
  padding: 3px 3px;
  /* height: 120px; */
}

.noticiaInfo {
  padding: 10px;
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

/* NOTICIAS TAB */

.noticias {
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: auto;
}
.my-card {
  width: 90%;
  margin: 25px;
}

.noticiaTitulo {
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  text-align: center;
  margin: 5px 0;
  color: #333;
  text-transform: uppercase;
  padding: 5px;
}

.noticiaDados {
  display: flex;
  justify-content: center;
  padding: 5px 10px;
}

.noticiaTexto {
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  text-align: left !important;
  color: #444;
  padding: 2px 10px;
}

.noticiaData {
  font-family: Roboto;
  line-height: 16px;
  text-align: center;
  padding: 2px 10px;
}

/* ************** MINHAS DENUNCIAS ********* */

.denuncias {
  padding: 15px 0;
  display: flex;
  justify-content: center;
}

.card {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 93%;
  height: 300px;
  overflow: auto;
  height: 75vh;
}

.denunciaTitulo {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  justify-content: center;
  text-align: center;
  color: #9c9997;
  margin-top: 15px;
  margin-bottom: 25px;
}
.denunciaInfo {
  display: flex;

  width: 100%;
  justify-content: center;
  text-align: center;
  padding: 10px;
}
.denunciaDados {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.denunciaProtocolo {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #f4853e;
}
.denunciaEndereco {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #333;
  padding: 0 13px;
}
.denunciaData {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #bdbdbd;
}

.denunciaStatus {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  color: red;
  margin-top: 3px;
}

.line {
  height: 2px;
  background: #f3f3f3;
}
</style>
