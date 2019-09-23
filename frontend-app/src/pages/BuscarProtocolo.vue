<template>
  <div class="fixed-center text-center">
    <q-input
      outlined
      bottom-slots
      v-model="protocolo"
      label="Digite o protocolo..."
      style="width:250px"
    >
      <template v-slot:append>
        <q-icon name="search" @click="procurarProtoloco(protocolo)" />
      </template>
    </q-input>

    <div v-show="pesquisa" class="resultado">
      <q-item>
        <q-item-section>
          <q-item-label>Denuncia {{denuncia.protocolo}}</q-item-label>
          <q-item-label caption>
            A sua denuncia do protocolo
            {{denuncia.protocolo}} realizada em {{denuncia.data}} e se encontra no estado:
            {{denuncia.status}}.
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-badge color="red" :label="denuncia.status" />
        </q-item-section>
      </q-item>
    </div>
  </div>
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
      pesquisa: false
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
      Denuncia.procurar(denuncia)
        .then(response => {
          console.log(response);
          this.denuncia = response.data;
          this.pesquisa = true;
        })
        .catch(e => {
          this.errors = e.response.data.errors;
          console.log(e.response.data.errors);
        });
    }
  }
};
</script>
<style scoped>
.resultado {
  border: 1px solid #ccc;
  margin-top: 10px;
  box-shadow: 0px 1px 5px #ccc;
}
</style>
