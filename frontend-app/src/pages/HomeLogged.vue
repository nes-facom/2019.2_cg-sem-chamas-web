<template>
  <div class="homeLogged" style="height: 100vh;  width: 100vw;" v-bind:class="isHome">
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

        <q-tab-panel name="minhasDenuncias" class="denuncias">
          <div class="card">
            <div class="denunciaTitulo">Minhas denúncias</div>
            <div class="line"></div>
            <div class="denunciaInfo">
              <div class="denunciaDados">
                <div class="denunciaProtocolo">00000000000000</div>
                <div class="denunciaData">10/11/2019 21:90</div>
                <div class="denunciaStatus">Fechada</div>
              </div>

              <div class="denunciaEndereco">Avenida Afonso Pena, 432 - Campo Grande-MS 79092-123</div>
            </div>
            <div class="line"></div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="noticias">
          <div class="noticias">
          <q-scroll-area
      visible="false"
      style="height: 92vh; max-width: 95%;"
    >
            <q-card v-for="n in noticias" v-bind:key="n.id" class="my-card" style="width: 90%;">
              <img :src="n.capa" style="width: 100%" />
              <div class="noticiaInfo">
                <div>
                  <div class="noticiaTitulo">{{ n.titulo }}</div>
                </div>

                <div class="noticiaDados">
                  <div class="noticiaData">
                    NOV
                    <br />17
                  </div>
                  <div class="noticiaTexto">{{ n.descricao }}</div>
                </div>
              </div>
            </q-card>
            </q-scroll-area>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
import Noticia from "../boot/noticia";
import { openURL } from "quasar";
import { AddressbarColor } from "quasar";
export default {
  name: "TelaDenuncia",
  data() {
    return {
      tab: "home",
      isHome: "bg_orange",
      noticias: []
    };
  },

  watch: {
    tab: function() {
      if (this.tab == "home") {
        this.isHome = "bg_orange";
        this.mostrar();
      } else this.isHome = "bg_white";
    }
  },

  
  methods: {
    mostrar(noticia) {
      const vm = this;
      Noticia.listar(noticia)
        .then(response => {
          console.log(response.data);
          this.noticias = response.data;
        })
        .catch(e => {
          this.errors = e.response.data.errors;
          console.log(e.response.data.errors);
        });
    }
  },
  mounted() {
    this.mostrar();
    console.log(this.noticias)
  },
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
  display: flex;
  flex-direction: column;
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
