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
        <q-btn outline style="color: #FB9727;" icon-right="add_a_photo" label="Tirar foto" />
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
          outline
          style="color: #FB9727;"
          icon-right="fas fa-map-marked-alt"
          label="Obter localizacao por GPS"
          @click="dialog = true"
        />
      </div>
      <div class="endereco">
        <h5>OU INFORME SEU ENDEREÇO</h5>
        <q-input rounded outlined label="Endereço" />
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
        <p>Avalie a intencidade do fogo/queimada</p>
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
        <q-input
          v-show="mostrarObs"
          rounded
          outlined
          label="Observação"
          type="textarea"
          class="obs"
        />
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

      <div class="modal">
        <div class="q-pa-md q-gutter-sm">
          <q-btn label="Maximized" color="primary" />

          <q-dialog
            v-model="dialog"
            persistent
            :maximized="maximizedToggle"
            transition-show="slide-up"
            transition-hide="slide-down"
          >
            <q-card class="bg-primary text-white">
              <q-bar>
                <q-space />

                <q-btn
                  dense
                  flat
                  icon="minimize"
                  @click="maximizedToggle = false"
                  :disable="!maximizedToggle"
                >
                  <q-tooltip v-if="maximizedToggle" content-class="bg-white text-primary">Minimize</q-tooltip>
                </q-btn>
                <q-btn
                  dense
                  flat
                  icon="crop_square"
                  @click="maximizedToggle = true"
                  :disable="maximizedToggle"
                >
                  <q-tooltip v-if="!maximizedToggle" content-class="bg-white text-primary">Maximize</q-tooltip>
                </q-btn>
                <q-btn dense flat icon="close" v-close-popup>
                  <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                </q-btn>
              </q-bar>

              <q-card-section>
                <div class="text-h6">Alert</div>
              </q-card-section>

              <q-card-section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.</q-card-section>
            </q-card>
          </q-dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { openURL, QInput } from "quasar";
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
      maximizedToggle: true
    };
  },
  components: {
    QInput
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
</style>