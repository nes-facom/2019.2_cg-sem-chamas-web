<template>
  <div
    class="container"
    style="height: 100vh"
  >
    <div class="estatisticas">
      <div class="dados" v-show="dados!=null">
        <div v-if="dados!=null">
          Protocolo: {{dados.protocolo}}
          Endereço: {{dados.endereco}}
          Data: {{dados.data}}
        </div>




      </div>
    </div>
    <div class="dash">
      <div class="dashboard">

        <h2>Denúncias</h2>

        <div class="tabela">
          <q-table
            class="my-sticky-column-table"
            title="Produção"
            :data="data"
            :columns="columns"
            row-key="protocolo"
            :selected-rows-label="getSelectedString"
            selection="multiple"
            :selected.sync="selected"
            :filter="filter"
          >
           <template v-slot:body="props">
          <q-tr :props="props"  @click.native="linhaSelecionada(props.row)">
          <q-td auto-width>
                          <q-checkbox dense v-model="props.selected"  />

          </q-td>
          <q-td key="protocolo" :props="props">{{ props.row.protocolo }}</q-td>
          <q-td key="endereco" :props="props">{{ props.row.endereco }}</q-td>
          <q-td key="data" :props="props">{{ props.row.data }}</q-td>
          <q-td key="status" :props="props">
            <q-badge square color="green">{{ props.row.status }}</q-badge>
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
export default {
  data () {
    return {
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
        { name: 'data', align: 'left', label: 'Data', field: 'data', sortable: true },
        { name: 'status',  align: 'center', label: 'Status', field: 'status', sortable: true },

      ],
      data: [
        {
          protocolo: 'Q12312312431225',
          endereco: 'Avenida Afonso Pena, 987',
          data: '12/12/12 22:22',
          status: 'Em aberto',

        },
         {
          protocolo: 'Q98765432101234',
          endereco: 'Avenida Manuel da Costa Lima, 123',
          data: '10/10/11 22:22',
          status: 'Em aberto',

        },
        {
          protocolo: 'Q93483948394873',
          endereco: 'Avenida Mato Grosso, 542',
          data: '10/10/10 22:22',
          status: 'Em aberto',

        }

      ]
    }
  },
  methods: {
    getSelectedString () {
      return this.selected.length === 0 ? '' : `${this.selected.length} record${this.selected.length > 1 ? 's' : ''} selected of ${this.data.length}`
    },
    mostraar(){
     console.log(this.selected[0])
    },
    linhaSelecionada(dados){
      console.log(dados)
      this.dados = dados
    }
    },
    mostrar(denuncia) {
      Denuncia.exibir(denuncia)
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          this.errors = e.response.data.errors;
          console.log(e.response.data.errors);
        });
    },
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

.estatisticas {
  width: 35%;
  text-align: center;
  background: #ddd;
  padding: 3% 2%;
  height: 100%;
}

.estatisticas h1 {
}

.dash {
  width: 65%;
  padding: 0% 4%;
  margin-top: 50px;

}

.dashboard h2 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 39px;
  line-height: 46px;
  margin-top: 10px;
}
</style>
