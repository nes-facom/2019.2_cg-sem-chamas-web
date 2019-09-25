<template>
  <div
    class="container"
    style="height: 100vh"
  >
    <div class="estatisticas">
      <div class="foto"></div>
      <div class="endereco"><p>{{selected[0].endereco}}</p></div>
      <div class="data"><p>{{selected[0].data}}</p> </div>
      <div class="protocolo"><p>{{selected[0].protocolo}}</p>
        <input type="submit" class="" @click="mostrar()">
      </div>
    </div>
    <div class="dash">
      <div class="dashboard">
         <div class="q-mt-md">lec
              Selected: {{ JSON.stringify(selected) }}
            </div>
        <h2>Denúncias</h2>

        <div class="tabela">
          <q-table
            class="my-sticky-column-table"
            title="Produção"
            :data="data"
            :columns="columns"
            row-key="name"
            :selected-rows-label="getSelectedString"
            selection="single"
            :selected.sync="selected"
            :filter="filter"
          >


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
