<template>
  <div class="container">
    <div class="card">
      <div class="titulo">
        <h3>Informações de Queimada</h3>
      </div>
      <div class="descricao">
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
          icon-right="add_a_photo"
          label="Tirar foto"
        />
        <div v-show="!imgCam" class="camera_img">
          <img
            src="http://portalamazonia.com/uploads/pics/queimada-diamantina-matogrosso-capa.jpg"
            width="250"
            placeholder-src="statics/quasar-logo.png"
            :alt="'Imagem: ' + imageSrc"
            id="photo"
            class="img_camera"
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
          @click="dialog = true"
        >
          <!-- <q-btn label="Maximized" color="primary" @click="dialog = true" /> -->
        </q-btn>
      </div>

      <div class="endereco">
        <h5>Ou informe seu endereço</h5>
        <q-input class="obs" rounded outlined label="Endereço" />
      </div>
      <div class="intensidade">
        <p></p>
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
        {{intensidade}}
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

          <div class="btn-denunciar">
          <q-btn color="primary" push>
            <div class="row items-center no-wrap botao-denuncia">
              <div class="text-center text-white text-weight-bold">Denunciar</div>
            </div>
          </q-btn>
        </div>
        </div>



    <div class="modal">
      <div class="q-pa-md q-gutter-sm">
        <q-dialog
          v-model="dialog"
          persistent
          :maximized="maximizedToggle"
          transition-show="slide-up"
          transition-hide="slide-down"
        >
          <q-card class="bg-primary text-white">
 <p class="oi" @click="dialog = false" ><q-icon
            v-show="!completo"
            name="close"
            class="text-ṕrimary"
            style="font-size: 0.7em;  vertical-align: middle; "
          /></p>
            <Map>

            </Map>
          </q-card>
        </q-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import Map from "./Map";
import { openURL, QInput, QDialog, QCard } from "quasar";
export default {
  name: "FormularioDenuncia",
  data() {
    return {
      text: "",
      ph: "",
      dense: false,
      mostrarObs: false,
      ocultarObs: true,
      mostrarDados: false,
      ocultarDados: true,
      completo: false,
      intensidade: 1,
      fogo: {
        um: true,
        dois: false,
        tres: false,
        quatro: false,
        cinco: false
      },
      dialog: false,
      maximizedToggle: true,
      imgCam: false,
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
          alert(this.imageSrc);
        },
        () => {
          // Falha
          this.$q.notify("Não foi possível acessar a câmera do dispositivo.");
        },
        {
          // Opções da Camera
          quality: 50,
          destinationType: navigator.camera.DestinationType.DATA_URL,
          encodingType: navigator.camera.EncodingType.JPEG,
          MEDIATYPE: navigator.camera.MediaType.PICTURE,
          sourceType: navigator.camera.PictureSourceType.CAMERA,
          mediaType: navigator.camera.MediaType.PICTURE,
          cameraDirection: navigator.camera.Direction.BACK,
          targetWidth: 300,
          targetHeight: 400
        }
      );
    }
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
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  text-align: center;
  color: #858585;
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
.camera {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  text-align: center;
  color: #858585;
}

.botao {
  background: #ffffff;
  border: 2px solid #ffa948;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 245.21px;
  height: 50px;
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

.obs{
  margin-top:  20px;
  display: flex;
  justify-content: center;
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
}
.card {
  justify-content: center;
  margin-top: 10px;
  width: 95vw;
  height: 90%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 19px;
  padding: 20px;
}

.btn-denunciar button {
  border-color: #fb9727;
  margin-top: 10%;
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
}
.oi{
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


</style>
