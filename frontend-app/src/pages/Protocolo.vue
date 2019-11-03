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
            <h3>Consultar por protocolo</h3>

            <p>
              Informe o
              <strong>
                número do protocolo
              </strong>
              para obter informações do andamento da denúncia.
            </p>
          </div>
          <div class="img">
            <img src="https://i.imgur.com/O1c5nQo.png" alt="" />
          </div>

          <div class="pesquisar">
            <q-input
              class="input-search"
              type="number"
              outlined
              bottom-slots
              v-model="protocolo"
              label="Insira o protocolo"
              style="width:250px"
            />
          </div>

          <div v-show="pesquisa" class="resultado">
            <q-item>
              <q-item-section>
                <q-item-label>
                  <strong class="text-grey">
                    Resultado
                  </strong>
                </q-item-label>
                <q-item-label caption>
                  A denuncia de protocolo
                  <strong class="text-primary">{{ denuncia.protocolo }}</strong>
                  se encontra
                  <strong class="text-green">
                    {{ denuncia.status }}
                  </strong>
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>

          <div class="btn-denunciar">
            <q-btn
              label="Consultar"
              color="primary"
              :disable="disable"
              @click="procurarProtoloco(protocolo)"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Denuncia from "../boot/denuncia";
import { QInput, QItem, QItemSection, QBadge, QItemLabel } from "quasar";
export default {
  name: "BuscarProtocolo",
  data() {
    return {
      protocolo: "",
      denuncia: { protocolo: "", status: "", data: "" },
      pesquisa: false,
      disable: false
    };
  },
  components: {
    QInput,
    QItem,
    QItemSection,
    QBadge,
    QItemLabel
  },
  methods: {
    procurarProtoloco(denuncia) {
      this.disable = true;
      Denuncia.procurar(denuncia)
        .then(response => {
          console.log(response);
          this.denuncia = response.data;
          this.disable = false;
          this.pesquisa = true;
        })
        .catch(e => {
          this.errors = e.response.data.errors;
          console.log(e.response.data.errors);
          this.disable = false;
        });
    }
  }
};
</script>

<style scoped>
.container {
  background: #f3f3f3;
  width: 100vw;
  height: 92vh;

  display: flex;
  align-items: center;
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
  color: #9c9997;
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
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 16 px;
  line-height: 20px;
  color: #9c9997;
  width: 95%;
}

.card {
  justify-content: center;
  margin-top: 10px;
  width: 95vw;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 19px;
  padding: 20px;
  height: 100vh;
  margin-bottom: 10px;
}

.btn-denunciar button {
  border-color: #f4853e;
  margin-top: 10%;
  margin-bottom: 30px;
  height: 55px;
  width: 250px;
}

.pesquisar {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.input-search ::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 19px;
  opacity: 1; /* Firefox */
  letter-spacing: 0.24em;
  text-align: center;
  color: #d5d5d5;
}

.titulo {
  padding-top: 10px;
}
</style>
