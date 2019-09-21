<template>
  <div>
    <Map v-show="dialog"></Map>
    <div class="container" v-show="!dialog">
      <div class="card">
        <div class="titulo">
          <h3>Informações de Queimada</h3>

          <p>Precisamos de algumas informações sobre a queimada.</p>
        </div>

        <div class="camera">
          <h5>
            1º PASSO
            <q-icon
              v-show="!completo"
              name="fas fa-circle"
              class="text-grey-4"
              style="font-size: 0.7em;  vertical-align: middle; "
            />
            <q-icon
              v-show="!completo"
              name="fas fa-check-circle"
              class="text-green"
              style="font-size: 0.7em;  vertical-align: middle; "
            />
            <p>Inserir imagem</p>
          </h5>

          <div></div>
          <q-btn
            class="botaoCamera"
            outline
            style="color: #FB9727;"
            icon-right="add_a_photo"
            label="Câmera"
            @click="captureImage"
          />

          <q-btn
            class="botaoCamera"
            outline
            style="color: #FB9727;"
            icon-right="add_photo_alternate"
            label="álbum"
            @click="captureImage('PHOTOLIBRARY')"
          />

          <div v-show="!imgCam" class="camera_img">
            <img
              class="img_camera"
              :src="imageSrc"
              placeholder-src="statics/quasar-logo.png"
              :alt="'Imagem: ' + imageSrc"
              id="photo"
            />
          </div>
        </div>
        <div class="gps">
          <h5>
            2º PASSO
            <q-icon
              v-show="!completo"
              name="fas fa-circle"
              class="text-grey-4"
              style="font-size: 0.7em;  vertical-align: middle; "
            />
            <q-icon
              v-show="completo"
              name="fas fa-check-circle"
              class="text-green"
              style="font-size: 0.7em;  vertical-align: middle; "
            />
          </h5>
          <q-btn
            class="botao"
            outline
            style="color: #FB9727;"
            icon-right="fas fa-map-marked-alt"
            label="Obter localização"
            @click="changeDialog()"
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
            v-model="enderecoS"
            :rules="[val => !!val || 'Field is required']"
          />
        </div>
        <div class="intensidade">
          <h5>
            3º PASSO
            <q-icon
              v-show="!completo"
              name="fas fa-circle"
              class="text-grey-4"
              style="font-size: 0.7em;  vertical-align: middle; "
            />
            <q-icon
              v-show="completo"
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
              v-show="!completo"
              name="fas fa-circle"
              class="text-grey-4"
              style="font-size: 0.7em;  vertical-align: middle; "
            />
            <q-icon
              v-show="completo"
              name="fas fa-check-circle"
              class="text-green"
              style="font-size: 0.7em;  vertical-align: middle; "
            />
          </h5>
          <p>Deseja deixar alguma observação sobre a queimada?</p>
          <q-btn
            :outline="!mostrarObs"
            :class="{marcado: mostrarObs, nmarcado: !mostrarObs}"
            @click="selecionarObs()"
            label="Sim"
          />
          <span class="espaco"></span>
          <q-btn
            :outline="!ocultarObs"
            :class="{marcado: ocultarObs, nmarcado: !ocultarObs}"
            @click="selecionarObs()"
            label="Não"
          />
          <div class="obs">
            <q-input
              v-show="mostrarObs"
              rounded
              outlined
              label="Observação"
              type="textarea"
              class="obs"
            />
          </div>
        </div>

        <div class="identificacao">
          <h5>
            5º PASSO
            <q-icon
              v-show="!completo"
              name="fas fa-circle"
              class="text-grey-4"
              style="font-size: 0.7em;  vertical-align: middle; "
            />
            <q-icon
              v-show="completo"
              name="fas fa-check-circle"
              class="text-green"
              style="font-size: 0.7em;  vertical-align: middle; "
            />
          </h5>
          <p>Deseja se identificar?</p>

          <q-btn
            :outline="!mostrarDados"
            :class="{marcado: mostrarDados, nmarcado: !mostrarDados}"
            @click="selecionarDados()"
            label="Sim"
          />

          <q-btn
            :outline="!ocultarDados"
            :class="{marcado: ocultarDados, nmarcado: !ocultarDados}"
            @click="selecionarDados()"
            label="Não"
          />
          <div v-show="mostrarDados" class="dados">
            <div class="titulo">
              <h3>Dados pessoais</h3>
            </div>
            <div class="descricao">
              <p>Informe alguns dados sobre você.</p>
              <q-input v-model="text" label="Nome:" :dense="dense" />
              <q-input v-model="text" label="Telefone:" :dense="dense" />
            </div>
          </div>
        </div>

        <!-- *************BOTAO NORMAL********** -->

        <!-- <div class="btn-denunciar">
          <q-btn color="primary" push to>
            <div class="row items-center no-wrap botao-denuncia">
              <div class="text-center text-white text-weight-bold">Denunciar</div>
            </div>
          </q-btn>
        </div>-->

        <!-- *************POPUP PEQUENO********** -->

        <!-- <div class="btn-denunciar">
          <q-btn label="Denunciar" color="primary" @click="inception = true" />

          <q-dialog v-model="fullHeight">
            <q-card>
              <q-card-section>
                <div class="popupDenunciaRegistrada">Denúncia registrada!</div>
              </q-card-section>

              <q-card-section>
                <div class="textpopupDenunciaRegistrada">
                  Enviada para o cômite de queimadas.
                  <br />Número de Protocolo: XXXXXXXXXX
                </div>
              </q-card-section>

              <q-card-actions align="middle" class="text-primary">
                <q-btn flat label="Ligar para bombeiros" @click="secondDialog = true" />
                <q-btn flat label="Fechar" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>

          <q-dialog
            v-model="secondDialog"
            persistent
            transition-show="scale"
            transition-hide="scale"
          >
            <q-card class="bg-teal text-white" style="width: 300px">
              <q-card-section>
                <div class="text-h6">Persistent</div>
              </q-card-section>

              <q-card-section>Click/Tap on the backdrop.</q-card-section>

              <q-card-actions align="right" class="bg-white text-teal">
                <q-btn flat label="OK" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>-->

        <div class="btn-denunciar">
          <q-btn label="Denunciar" color="primary" @click="full = true" />
          <q-dialog v-model="full" full-height>
            <q-card>
              <q-card-section>
                <div class="popupDenunciaRegistrada">Denúncia registrada!</div>
              </q-card-section>
              <q-card-section>
                <div
                  class="textpopupDenunciaRegistrada"
                >Enviada para o cômite de queimadas. Número de Protocolo: XXXXXXXXXX</div>
              </q-card-section>

              <div class="imagePopup">
                <div class="col-4">
                  <q-img src="https://placeimg.com/500/300/nature" :ratio="8/4" />
                </div>
              </div>

              <!-- <div class="botoesPop"> -->
              <q-btn
                class="botaoPop"
                outline
                style="color: #FB9727;"
                icon="phone_"
                label="Ligar para bombeiros"
                @click="changeDialog()"
              ></q-btn>

              <q-btn
                class="botaoPop"
                outline
                style="color: #FB9727;"
                icon="add"
                label="Cadastrar-se"
                @click="changeDialog()"
              ></q-btn>
              <q-btn
                class="botaoPop"
                outline
                style="color: #FB9727;"
                icon="description"
                label="Notícias"
                @click="changeDialog()"
              ></q-btn>
              <!-- </div> -->

              <!-- <q-card-actions align="right" class="bg-white text-teal">
                <q-btn flat label="OK" v-close-popup />
              </q-card-actions>-->
            </q-card>
          </q-dialog>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
document.addEventListener("deviceready", () => {}, false);
</script>

<script>
import { mapState } from "vuex";
import { store } from "../store/index";
import Map from "./Map";
import { openURL, QInput, QDialog, QCard } from "quasar";
export default {
  name: "FormularioDenuncia",
  data() {
    return {
      endereco: "teste",
      text: "",
      ph: "",
      base64:
        "data:image/png;base64,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",
      dense: false,
      mostrarObs: false,
      ocultarObs: true,
      mostrarDados: false,
      ocultarDados: true,
      completo: false,
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
      denuncia: {
        foto: "",
        intensidade: "",
        observacao: "",
        endereco: ""
      },

      maximizedToggle: true,
      imgCam: true,
      imageSrc: ""
    };
  },
  components: {
    QInput,
    QDialog,
    QCard,
    Map
  },
  methods: {
    changeDialog() {
      this.$store.commit("Dialog/changeDialogg", true);
    },
    selecionarObs() {
      this.mostrarObs = !this.mostrarObs;
      this.ocultarObs = !this.ocultarObs;
    },
    selecionarDados() {
      this.mostrarDados = !this.mostrarDados;
      this.ocultarDados = !this.ocultarDados;
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
    },
    captureImage() {
      navigator.camera.getPicture(
        data => {
          // Sucesso
          this.imageSrc = `data:image/jpeg;base64, ${data}`;
          this.imgCam = false;
        },
        () => {
          // Falha
          this.$q.notify("Não foi possível acessar a câmera do dispositivo.");
        },
        {
          // Opções da Camera
          quality: 90,
          destinationType: navigator.camera.DestinationType.DATA_URL,
          encodingType: navigator.camera.EncodingType.JPEG,
          MEDIATYPE: navigator.camera.MediaType.PICTURE,
          sourceType: navigator.camera.PictureSourceType.CAMERA,
          mediaType: navigator.camera.MediaType.PICTURE,
          cameraDirection: navigator.camera.Direction.BACK,
          targetWidth: 700,
          correctOrientation: true
        }
      );
    }
  },
  computed: {
    ...mapState({ enderecoS: state => state.Map.enderecoS }),
    ...mapState({ dialog: state => state.Dialog.dialog })
  }
};
</script>

<style>
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
  border: 2px solid #ffa948;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 263px;
  height: 50px;
}
.botaoCamera {
  background: #ffffff;
  border: 2px solid #ffa948;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 113px;
  height: 50px;
  margin-right: 18px;
  margin-left: 18px;
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
  border-color: #fb9727;
  margin-top: 10%;
  margin-bottom: 30px;
  height: 55px;
  width: 250px;
}

.marcado {
  background: #fb9727;
  color: white;
}

.nmarcado {
  color: #fb9727;
}

.fogocinza {
  color: #aaa;
  border: #fb9727;
}

.fogovivo {
  color: #fb9727;
}

.img_camera {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 20px;
  border-width: 2px;
  border-style: solid;
  border-color: #fb9727;
  width: 80%;
}
.oi {
  position: absolute;
  top: 5%;
  left: 95%;
  z-index: 2;
  margin-left: -15px;
  margin-top: -30px;
  height: 30px;
  width: 30px;
  font-size: 25px;
  color: #fb9727;
  text-align: center;
  font-weight: bold;
}
.camera .q-btn .q-icon {
  font-size: 1.3em;
  margin-left: 1.5px;
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
.popupDenunciaRegistrada {
  margin-top: 1em;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  align-items: center;
  text-align: center;
  color: #858585;
  padding-top: 5px;
}
.textpopupDenunciaRegistrada {
  display: flex;
  justify-content: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 40px;
  align-items: center;
  flex-direction: column;
  color: #737373;
  margin: center;
  padding: 2em;
}
.botaoPop {
  background: #ffffff;
  border: 2px solid #ffa948;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  width: 263px;
  height: 30px;
  margin-right: 25px;
  margin-left: 35px;
  margin-top: 3px;
  margin-bottom: 10px;
}
.imagePopup {
  padding: 2em;
  margin-bottom: 75px;
}
/* .botoesPop {
  background: #ffa948;
  border: 2px solid #ffa948;
  box-sizing: border-box;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 113px;
  height: 50px;
  margin-right: 25px;
  margin-left: 35px;
  margin-top: 18px;
  margin-bottom: 18px;
} */
</style>
