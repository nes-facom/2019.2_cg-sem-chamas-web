<template>
  <transition
    appear
    enter-active-class="animated slideInRight"
    leave-active-class="animated slideOutDown"
  >
    <div>
      <div class="container">
        <div class="card">
          <div class="titulo">
            <h3>Informações de Queimada</h3>

            <p>Precisamos de algumas informações sobre a queimada.</p>
          </div>

          <div class="camera">
            <h5>
              1º PASSO
              <q-icon
                v-show="imageS==1"
                name="fas fa-circle"
                class="text-grey-4"
                style="font-size: 0.7em;  vertical-align: middle; "
              />
              <q-icon
                v-show="imageS!=1"
                name="fas fa-check-circle"
                class="text-green"
                style="font-size: 0.7em;  vertical-align: middle; "
              />
              <p style="margin-top: 10px;">Inserir imagem</p>
            </h5>
            <div class="media">
              <q-btn
                class="botaoCamera"
                outline
                style="color: #f4853e;"
                icon-right="add_a_photo"
                label="Câmera"
                @click="captureImage()"
              />
              <p>OU</p>
              <q-btn
                class="botaoCamera"
                outline
                style="color: #f4853e;"
                icon-right="add_photo_alternate"
                label="álbum"
                @click="getPhoto()"
              />
            </div>
          </div>
          <div v-show="imageS !=1" class="camera_img" style="margin-top: 10px;">
            <img class="img_camera" :src="imageS" :alt="'Imagem: ' + imageS" id="photo" />
          </div>
          <div class="gps">
            <h5>
              2º PASSO
              <q-icon
                v-show="enderecoC==null"
                name="fas fa-circle"
                class="text-grey-4"
                style="font-size: 0.7em;  vertical-align: middle; "
              />
              <q-icon
                v-show="enderecoC!=null"
                name="fas fa-check-circle"
                class="text-green"
                style="font-size: 0.7em;  vertical-align: middle; "
              />
            </h5>
            <q-btn
              class="botao"
              outline
              style="color: #f4853e;"
              icon-right="fas fa-map-marked-alt"
              label="Obter localização"
              to="/denuncia/gps"
            >
              <!-- <q-btn label="Maximized" color="primary" @click="dialog = true" /> -->
            </q-btn>
          </div>

          <div class="endereco">
            <h5>Ou informe seu endereço</h5>
            <q-input
              class="enderecoo"
              rounded
              outlined
              label="Endereço"
              v-model="enderecoC"
              :rules="[val => !!val || 'Preencha o endereço...']"
            />
          </div>
          <div class="intensidade">
            <h5>
              3º PASSO
              <q-icon
                v-show="!completo.um"
                name="fas fa-circle"
                class="text-grey-4"
                style="font-size: 0.7em;  vertical-align: middle; "
              />
              <q-icon
                v-show="completo.um"
                name="fas fa-check-circle"
                class="text-green"
                style="font-size: 0.7em;  vertical-align: middle; "
              />
            </h5>
            <p>Avalie a intencidade do fogo</p>
            <!-- {{intensidade}} -->
            <q-icon
              name="fas fa-fire"
              :class="{fogocinza: !fogo.um, fogovivo: fogo.um}"
              style="font-size: 2em;"
              @click="setIntensidade(1)"
            />
            <q-icon
              name="fas fa-fire"
              :class="{fogocinza: !fogo.dois, fogovivo: fogo.dois}"
              style="font-size: 2em;"
              @click="setIntensidade(2)"
            />
            <q-icon
              name="fas fa-fire"
              :class="{fogocinza: !fogo.tres, fogovivo: fogo.tres}"
              style="font-size: 2em;"
              @click="setIntensidade(3)"
            />
            <q-icon
              name="fas fa-fire"
              :class="{fogocinza: !fogo.quatro, fogovivo: fogo.quatro}"
              style="font-size: 2em;"
              @click="setIntensidade(4)"
            />
            <q-icon
              name="fas fa-fire"
              :class="{fogocinza: !fogo.cinco, fogovivo: fogo.cinco}"
              style="font-size: 2em;"
              @click="setIntensidade(5)"
            />
          </div>
          <div class="observacao">
            <h5>
              4º PASSO
              <q-icon
                v-show="!completo.dois"
                name="fas fa-circle"
                class="text-grey-4"
                style="font-size: 0.7em;  vertical-align: middle; "
              />
              <q-icon
                v-show="completo.dois"
                name="fas fa-check-circle"
                class="text-green"
                style="font-size: 0.7em;  vertical-align: middle; "
              />
            </h5>
            <p>Deseja deixar alguma observação sobre a queimada?</p>
            <q-btn
              :outline="!mostrarObs"
              :class="{marcado: mostrarObs, nmarcado: !mostrarObs}"
              @click="selecionarObs(true)"
              label="Sim"
            />
            <span class="espaco"></span>
            <q-btn
              :outline="!ocultarObs"
              :class="{marcado: ocultarObs, nmarcado: !ocultarObs}"
              @click="selecionarObs(false)"
              label="Não"
            />
            <div class="obs">
              <q-input
                v-show="mostrarObs == true"
                rounded
                outlined
                label="Observação"
                type="textarea"
                class="obs"
                v-model="observacaoC"
              />
            </div>
          </div>

          <div class="identificacao">
            <h5>
              5º PASSO
              <q-icon
                v-show="!completo.tres"
                name="fas fa-circle"
                class="text-grey-4"
                style="font-size: 0.7em;  vertical-align: middle; "
              />
              <q-icon
                v-show="completo.tres"
                name="fas fa-check-circle"
                class="text-green"
                style="font-size: 0.7em;  vertical-align: middle; "
              />
            </h5>
            <p>Deseja se identificar?</p>

            <q-btn
              :outline="!mostrarDados"
              :class="{marcado: mostrarDados, nmarcado: !mostrarDados}"
              @click="selecionarDados(true)"
              label="Sim"
            />

            <q-btn
              :outline="!ocultarDados"
              :class="{marcado: ocultarDados, nmarcado: !ocultarDados}"
              @click="selecionarDados(false)"
              label="Não"
            />
            <div v-show="mostrarDados" class="dados">
              <div class="titulo">
                <h3>Dados pessoais</h3>
              </div>
              <div class="descricao">
                <p>Informe alguns dados sobre você.</p>
                <q-input v-model="nomeC" type="text" label="Nome:" />
                <q-input v-model="telefoneC" type="number" label="Telefone:" />
              </div>
            </div>
          </div>
          <div class="btn-denunciar">
            <q-btn label="Denunciar" color="primary" :disable="disable" @click="denunciar()" />
            <q-dialog v-model="full" full-height>
              <!-- <div class="popup"> -->
              <q-card class="popProtocolo">
                <div class="denunciaRegistradaTopo">
                  <div class="closePop">
                    <q-btn flat label="X" v-close-popup to="/buscar"/>
                  </div>
                  <q-card-section>
                    <q-icon
                      class="iconDenunciaRegistrada"
                      name="fas fa-check-circle"
                      style="font-size: 90px;"
                    ></q-icon>
                    <div class="popupDenunciaRegistrada">Denúncia registrada!</div>
                  </q-card-section>
                </div>

                <!-- <q-card-section> -->
                <div class="infoProtocolo">
                  <div class="textNumProtocolo">Número do Protocolo:</div>
                  <div v-show="protocoloS!=null" class="numberProtocol">{{protocoloS}}</div>
                  <div
                    class="textCadastrar"
                  >Anote o número ou cadastre-se para acompanhar sua denúncia.</div>
                  <div class="btn-cadastrar">
                    <q-btn label="Cadastrar-se" color="primary" />
                  </div>
                </div>
              </q-card>
              <!-- </div> -->
            </q-dialog>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
document.addEventListener("deviceready", () => {}, false);
</script>

<script>
import { mapState } from "vuex";
import { store } from "../store/index";
import Map from "./Map";
import Denuncia from "../boot/denuncia";
import {
  openURL,
  QInput,
  QDialog,
  QCard,
  QSlideTransition,
  QCardSection,
  QImg
} from "quasar";
export default {
  name: "FormularioDenuncia",
  data() {
    return {
      disable: false,
      endereco: null,
      text: null,
      ph: null,
      dense: false,
      mostrarObs: false,
      ocultarObs: false,
      mostrarDados: false,
      ocultarDados: false,
      completo: {
        um: false,
        dois: false,
        tres: false
      },
      intensidade: 1,
      inception: false,
      secondDialog: false,
      small: false,
      medium: false,
      fullWidth: false,
      fullHeight: false,
      full: false,
      fogo: {
        um: true,
        dois: false,
        tres: false,
        quatro: false,
        cinco: false
      },
      maximizedToggle: true,
      imgCam: true,
      imageSrc: null,
      denuncia: {
        endereco: null,
        nome: null,
        observacao: null,
        image: null,
        intensidade: 1,
        telefone: null,
        status: "Aberto",
        protocolo: null,
        data: null
      }
    };
  },
  components: {
    QInput,
    QDialog,
    QCard,
    Map,
    QSlideTransition,
    QCardSection,
    QImg
  },
  beforeMount() {
    this.$store.commit("Dialog/changeDialogg", false);
  },
  methods: {
    denunciar() {
      const vm = this
      this.disable = true;
      this.gerarProtocolo();
      this.denuncia = {
        observacao: this.observacaoS,
        nome: this.nomeS,
        foto: this.imageS,
        endereco: this.enderecoS,
        intensidade: this.intensidadeS,
        telefone: this.telefoneS,
        status: this.statusS,
        protocolo: this.protocoloS,
        data: this.dataS
      };


      Denuncia.salvar(this.denuncia)
        .then(response => {
          console.log(response);

          vm.full = true;
          vm.disable = true;
          this.errors = {};
          const value = '';
          vm.$store.commit("Map/updateEndereco", null);
          vm.$store.commit("Denuncia/setNome", null);
          vm.$store.commit("Denuncia/setObservacao", null);
          vm.$store.commit("Denuncia/setImage", 1);
          vm.$store.commit("Denuncia/setIntensidade", 1);
          vm.$store.commit("Denuncia/setData", null);
          vm.$store.commit("Denuncia/setTelefone", null);

        })
        .catch(e => {
          vm.disable = false;
          vm.$q.notify(e);
          this.errors = e;
        });


    },

    gerarProtocolo() {
      const timeInMs = Date.now();
      const protocolo = `Q${timeInMs}`;
      console.log(timeInMs, protocolo);
      const date = new Date();
      const d = date.toISOString({ timeZone: "America/Campo_Grande" });
      // const data = new Date().toLocaleString('pt-BR', {timeZone: 'America/Campo_Grande',});
      this.$store.commit("Denuncia/setProtocolo", timeInMs);
      this.$store.commit("Denuncia/setData", d);
    },
    changeDialog() {
      this.$store.commit("Dialog/changeDialogg", true);
    },

    selecionarObs(obs) {
      if (obs == true) {
        this.mostrarObs = true;
        this.ocultarObs = false;
      } else {
        this.mostrarObs = false;
        this.ocultarObs = true;
      }
      this.completo.dois = true;
    },
    selecionarDados(dados) {
      if (dados == true) {
        this.mostrarDados = true;
        this.ocultarDados = false;
      } else {
        this.mostrarDados = false;
        this.ocultarDados = true;
      }
      this.completo.tres = true;
    },
    setIntensidade(intensidade) {
      this.intensidade = intensidade;
      if (intensidade == 1) {
        this.fogo.um = true;
        this.fogo.dois = false;
        this.fogo.tres = false;
        this.fogo.quatro = false;
        this.fogo.cinco = false;
      } else if (intensidade == 2) {
        this.fogo.um = true;
        this.fogo.dois = true;
        this.fogo.tres = false;
        this.fogo.quatro = false;
        this.fogo.cinco = false;
      } else if (intensidade == 3) {
        this.fogo.um = true;
        this.fogo.dois = true;
        this.fogo.tres = true;
        this.fogo.quatro = false;
        this.fogo.cinco = false;
      } else if (intensidade == 4) {
        this.fogo.um = true;
        this.fogo.dois = true;
        this.fogo.tres = true;
        this.fogo.quatro = true;
        this.fogo.cinco = false;
      } else {
        this.fogo.um = true;
        this.fogo.dois = true;
        this.fogo.tres = true;
        this.fogo.quatro = true;
        this.fogo.cinco = true;
      }
      this.intensidade = intensidade;
      this.$store.commit("Denuncia/setIntensidade", intensidade);
      this.completo.um = true;
    },
    captureImage() {
      navigator.camera.getPicture(
        data => {
          // Sucesso
          const imageSrc = `data:image/jpeg;base64, ${data}`;
          this.imgCam = false;
          this.$store.commit("Denuncia/setImage", imageSrc);
        },
        error => {
          console.log(error);
          // Falha
          this.$q.notify(
            error
          );
        },
        {
          // Opções da Camera
          quality: 80,
          destinationType: navigator.camera.DestinationType.DATA_URL,
          encodingType: navigator.camera.EncodingType.JPEG,
          MEDIATYPE: navigator.camera.MediaType.PICTURE,
          sourceType: navigator.camera.PictureSourceType.CAMERA,
          mediaType: navigator.camera.MediaType.PICTURE,
          cameraDirection: navigator.camera.Direction.BACK,
          targetWidth: 700,
          correctOrientation: true
          // allowEdit: true
        }
      );
    },
    getPhoto() {
      console.log("oi");
      navigator.camera.getPicture(
        data => {
          // Sucesso
          const imageSrc = `data:image/jpeg;base64, ${data}`;
          this.imgCam = false;
          this.$store.commit("Denuncia/setImage", imageSrc);
          console.log(imageSrc);
        },
        error => {
          console.log(error, error.code)
          // Falha
          this.$q.notify(
            error
          );
        },
        {
          quality: 80,
          encodingType: navigator.camera.EncodingType.JPEG,
          mediaType: navigator.camera.MediaType.PICTURE,
          targetWidth: 700,
          correctOrientation: true,
          destinationType: navigator.camera.DestinationType.DATA_URL,
          sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
        }
      );
    }
  },
  computed: {
    ...mapState({ enderecoS: state => state.Map.enderecoS }),
    ...mapState({ imageS: state => state.Denuncia.image }),
    ...mapState({ intensidadeS: state => state.Denuncia.intensidade }),
    ...mapState({ nomeS: state => state.Denuncia.nome }),
    ...mapState({ telefoneS: state => state.Denuncia.telefone }),
    ...mapState({ observacaoS: state => state.Denuncia.observacao }),
    ...mapState({ statusS: state => state.Denuncia.status }),
    ...mapState({ protocoloS: state => state.Denuncia.protocolo }),
    ...mapState({ dataS: state => state.Denuncia.data }),
    ...mapState({ dialogg: state => state.Dialog.dialogg }),
    enderecoC: {
      get() {
        return this.enderecoS;
      },
      set(value) {
        this.$store.commit("Map/updateEndereco", value);
        this.$store.commit("Denuncia/setEndereco", value);
      }
    },
    telefoneC: {
      get() {
        return this.telefoneS;
      },
      set(value) {
        this.$store.commit("Denuncia/setTelefone", value);
      }
    },
    nomeC: {
      get() {
        return this.nomeS;
      },
      set(value) {
        this.$store.commit("Denuncia/setNome", value);
      }
    },
    observacaoC: {
      get() {
        console.log(
          this.observacaoS,
          this.nomeS,
          this.telefoneS,
          this.enderecoS,
          this.intensidadeS,
          this.dataS
        );

        return this.observacaoS;
      },
      set(value) {
        this.$store.commit("Denuncia/setObservacao", value);
      }
    }
  }
};
</script>

<style scoped>
.container {
  background: #f3f3f3;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
h3 {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #605b57;
}
h5 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 14px;
  align-items: center;
  text-align: center;
  color: #858585;
}
p {
  display: flex;
  justify-content: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 16 px;
  line-height: 13px;
  align-items: center;
  flex-direction: column;
  color: #737373;
}
.camera {
  height: 100px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  text-align: center;
  color: #858585;
}
.camera p {
  margin: 0px;
}
.botao {
  background: #ffffff;
  border: 2px solid #f4853e;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 263px;
  height: 50px;
}
.botaoCamera {
  background: #ffffff;
  border: 2px solid #f4853e;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 113px;
  height: 50px;
  margin-right: 10px;
  margin-left: 10px;
}
.enderecoo {
  width: 263px;
}
.descricao {
  display: flex;
  justify-content: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 16 px;
  line-height: 13px;
  align-items: center;
  flex-direction: column;
  color: #737373;
}
.popProtocolo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  text-align: center;
}
.infoProtocolo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
  padding: 10%;
}
btn-denunciar .gps {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  text-align: center;
  color: #858585;
}
.endereco {
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #858585;
}
label {
  width: 80%;
  flex-wrap: center;
  align-items: center;
}
.intensidade {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  text-align: center;
  color: #858585;
}
.observacao {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  text-align: center;
  color: #858585;
}

.obs {
  margin-top: 5px;
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-items: center;
}

.identificacao {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  text-align: center;
  color: #858585;
  align-items: center;
}
.card {
  justify-content: center;
  margin-top: 10px;
  width: 95vw;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 19px;
  padding: 20px;
}

.btn-denunciar button {
  border-color: #f4853e;
  margin-top: 10%;
  margin-bottom: 30px;
  height: 55px;
  width: 250px;
}
.marcado {
  background: #f4853e;
  color: white;
}

.nmarcado {
  color: #f4853e;
}

.fogocinza {
  color: #aaa;
  border: #f4853e;
}

.fogovivo {
  color: #f4853e;
}

.img_camera {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 20px;
  border-width: 2px;
  border-style: solid;
  border-color: #f4853e;
  width: 80%;
}
.camera .q-btn .q-icon {
  font-size: 1.3em;
  /* margin-left: 1.5px; */
}
.dados {
  margin-top: 30px;
}
.observacao .q-btn {
  margin: 5px;
}

.identificacao .q-btn {
  margin: 5px;
}

.media {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.media .q-btn {
  padding: 0;
}
/* CSS PROTOCOLO */
.closePop {
  text-align: end;
  color: #ffffff;
  font-size: 14px;
}
.btn-cadastrar .q-btn {
  border-color: #f4853e;
  border-color: #f4853e;
  height: 55px;
  justify-content: center;
  margin-top: 60%;
}
.textNumProtocolo {
  width: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 23px;
  text-align: center;
  color: #4f4f4f;
  margin-top: 80%;
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
  color: #ffffff;
}
.textpopupDenunciaRegistrada {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #737373;
  margin-left: 50px;
}
.denunciaRegistradaTopo {
  position: absolute;
  width: 100%;
  left: 0px;
  top: 0px;
  background-color: #f4853e;
}
.fas .fa-check-circle {
  background: #ffffff;
}
.iconDenunciaRegistrada {
  color: #ffffff;
}

.numberProtocol {
  width: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 42px;
  /* identical to box height */
  text-align: center;
  color: #f4853e;
}
.textCadastrar {
  width: 100%;
  margin: 5%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  color: #737373;
}
</style>
