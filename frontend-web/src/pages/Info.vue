<template>
  <div
    class="container"
    style="height: 100vh"
  >
    <div class="estatisticas"
        v-show="dados!=null"

    >
      <!-- <q-btn color="primary" icon="check" label="OK" @click="load()" /> -->
      <div
        class="dados"
      >
        <h1>Dados da Denúncias</h1>
        <div v-if="dados!=null">

          <q-card
            flat
            square
            class="my-card"
          >

            <img
              v-if="dados.foto==1"
              src="https://s2.glbimg.com/P7cxtIPs1JjjUvEt3NwWD9hJ0KM=/0x0:870x580/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/I/C/El0D1AQt2UCXXfiGpjdw/queimada-br-319-foto-de-esio-mendes-39-870x580.jpg"
            >
            <img
              v-else
              :src="dados.foto"
            >
            <q-list>
              <q-item clickable>
                <q-item-section avatar>
                  <q-icon
                    color="primary"
                    name="calendar_today"
                  />
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{dados.created_at | formatData}}</q-item-label>
                  <q-item-label caption>Data</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable>
                <q-item-section avatar>
                  <q-icon
                    color="red"
                    name="insert_drive_file"
                  />
                </q-item-section>
                <q-separator />
                <q-item-section>
                  <q-item-label>{{dados.protocolo}}</q-item-label>
                  <q-item-label caption>Protocolo</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable>
                <q-item-section avatar>
                  <q-icon
                    color="amber"
                    name="business"
                  />
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{dados.endereco}}</q-item-label>
                  <q-item-label caption>Endereço</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>

        </div>

      </div>
    </div>
    <div class="dash">
      <div class="dashboard">

        <q-btn color="primary" icon="check" label="OK" @click="total()" />
        <h2>Denúncias </h2>
        <div class="tabela">
          <q-table
          :grid="$q.screen.xs"
            flat
            class="my-sticky-column-table"
            title="Denúncias"
            :data="data"
            :columns="columns"
            row-key="protocolo"
            :selected-rows-label="getSelectedString"
            selection="multiple"
            :selected.sync="selected"
            :filter="filter"
            :rows-per-page-options="[0]"
            :pagination.sync="pagination"
          >
            <template v-slot:body="props">
              <q-tr
                :props="props"
                @click.native="linhaSelecionada(props.row)"
              >
                <q-td auto-width>
                  <q-checkbox
                    dense
                    v-model="props.selected"
                  />

                </q-td>
                <q-td
                  key="protocolo"
                  :props="props"
                >{{ props.row.protocolo }}</q-td>
                <q-td
                  key="endereco"
                  :props="props"
                >{{ props.row.endereco }}</q-td>
                <q-td
                  key="created_at"
                  :props="props"
                >{{ props.row.created_at | formatData}}</q-td>
                <q-td
                  key="status"
                  :props="props"
                >
                  <q-badge
                    square
                    color="green"
                  >{{ props.row.status }}</q-badge>
                </q-td>
                <q-td
                  key="acoes"
                  :props="props"
                >
                  <q-btn
                    color="red"
                    icon="delete"
                    @click="remover(props.row.id)"
                  />
                </q-td>
              </q-tr>
            </template>

            <template v-slot:top-right>
              <q-input
                borderless
                dense
                debounce="300"
                v-model="filter"
                placeholder="Search"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>
          </q-table>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Denuncia from "../boot/denuncia";
export default {
  data () {
    return {
      pagination: {
        page: 1,
        rowsPerPage: 6,
        descending: true,
        sortBy: 'protocolo',
      },
      denuncia: {
        id: "",
        endereco: "",
        protocolo: ""
      },

      denuncias: [],
      selected: [],
      filter: '',
      select: [],
      dados: null,
      columns: [
        {
          name: 'protocolo',
          required: true,
          label: 'Protocolo',
          align: 'left',
          field: row => row.protocolo,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'endereco', align: 'left', label: 'Endereço', field: 'endereco', sortable: true },
        { name: 'created_at', align: 'left', label: 'Data', field: 'created_at', sortable: true },
        { name: 'status', align: 'center', label: 'Status', field: 'status', sortable: true },
        { name: 'acoes', align: 'center', label: 'Ações', field: 'acoes', sortable: false },

      ],
      data: [
        {
          protocolo: 'Q12312312431225',
          endereco: 'Avenida Afonso Pena, 987',
          created_at: '10/10/2011 18:22:00',
          status: 'Em aberto',

        },
        {
          protocolo: 'Q98765432101234',
          endereco: 'Avenida Manuel da Costa Lima, 123',
          created_at: '10/10/2011 18:22:00',
          status: 'Em aberto',

        },
        {
          protocolo: 'Q93483948394873',
          endereco: 'Avenida Mato Grosso, 542',
          created_at: '10/10/2011 18:22:00',
          status: 'Em aberto',

        }

      ]
    }
  },
  filters: {
    formatData: (data) => {
      const dat = new Date(data);
      const formatData = dat.toLocaleString("pt-BR", { timeZone: 'America/Anchorage', });

      return formatData
    }
  },
  methods: {
    getSelectedString () {
      return this.selected.length === 0 ? '' : `${this.selected.length} record${this.selected.length > 1 ? 's' : ''} selected of ${this.data.length}`
    },

    linhaSelecionada (dados) {
      console.log(dados)
      this.dados = dados
    },
    load () {
      this.$q.loading.show({
        backgroundColor: 'orange',
        message: 'Atualizando dados do servidor...',
        messageColor: 'black'
      })
    },
    mostrar (denuncia) {
      const vm = this;
      this.$q.loading.show({
        backgroundColor: 'orange',
        message: 'Atualizando dados do servidor...',
        messageColor: 'black',
      })

      Denuncia.listar(denuncia)
        .then(response => {
          console.log(response.data);
          this.data = response.data
          vm.$q.loading.hide()

        })
        .catch(e => {
          this.errors = e.response.data.errors;
          console.log(e.response.data.errors);
          vm.$q.loading.hide()

        });
    },

    total(denuncia){
      Denuncia.contar(denuncia)
      .then(response => {
          console.log(response.data);

        })
        .catch(e => {
          console.log(e.response.data.errors);

        });
    },

    remover (denuncia) {
      if (confirm("Deseja excluir o denuncia?")) {
        Denuncia.apagar(denuncia)
          .then(response => {
            this.mostrar();
            this.errors = {};
          })
          .catch(e => {
            this.errors = e.response.data.errors;
          });
      }
    },

  },
  mounted () {
    this.mostrar();
  }

}


</script>
<style lang="stylus" scoped>
p {
  margin: 0;
}

.container {
  background: #F3EEEE;
  display: flex;
  flex-direction: row;
}

.estatisticas h1 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
}

.estatisticas {
  width: 25%;
  text-align: center;
  background: #fff;
  padding: 1% 2%;
  height: 100%;
   overflow:auto;
   box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
}

.estatisticas h1 {
}

.dash {
  width: 75%;

  padding: 0% 1%;
  margin-top: 20px;
}

.dashboard h2 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 39px;
  line-height: 46px;
  margin-top: 10px;
}

.q-card {
  border: none;
}
</style>
