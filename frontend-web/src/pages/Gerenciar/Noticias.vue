<template>
  <div class="container" style="height: 92vh">
    <div class="dash">
      <div class="dashboard">
        <h2>Notícias</h2>

        <q-table
          flat
          :grid="$q.screen.xs"
          class="my-sticky-column-table"
          title="Noticias"
          :data="data"
          :columns="columns"
          row-key="created_at"
          selection="multiple"
          :selected.sync="selected"
          :filter="filter"
          :pagination.sync="pagination"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td auto-width>
                <q-checkbox dense v-model="props.selected" />
              </q-td>
              <q-td key="capa" :props="props">
                <img :src="props.row.capa" alt="" width="150" />
              </q-td>

              <q-td key="titulo" :props="props">{{ props.row.titulo }}</q-td>

              <q-td key="descricao" :props="props">{{
                props.row.descricao
              }}</q-td>

              <q-td key="created_at" :props="props">{{
                props.row.created_at
              }}</q-td>

              <q-td key="acoes" :props="props">
                <q-btn
                  color="green"
                  style="font-size: 0.9em; width: 5px; height: 5px; margin-left: 5px"
                  icon="remove_red_eye"
                />
                <q-btn
                  color="orange"
                  style="font-size: 0.9em; width: 5px; height: 5px; margin-left: 5px"
                  icon="edit"
                />
                <q-btn
                  color="red"
                  style="font-size: 0.9em; width: 5px; height: 5px; margin-left: 5px"
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
              placeholder="Procurar"
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
</template>

<script>
import Noticia from '../../boot/noticia';
export default {
  data() {
    return {
      pagination: {
        page: 1,
        rowsPerPage: 5,
        descending: true,
        sortBy: 'created_at'
      },
      noticias: [],
      selected: [],
      filter: '',
      select: [],
      
      dados: null,
      columns: [
        {
          name: 'capa',
          required: true,
          label: 'Capa',
          align: 'left',
          field: row => row.protocolo,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'titulo',
          align: 'left',
          label: 'Titulo',
          field: 'titulo',
          sortable: true
        },

        {
          name: 'created_at',
          align: 'left',
          label: 'Data',
          field: 'created_at',
          sortable: true
        },
        {
          name: 'acoes',
          align: 'center',
          label: 'Ações',
          field: 'acoes',
          sortable: false
        }
      ],
      data: [
        {
          capa:
            'https://f.i.uol.com.br/fotografia/2019/03/15/15526795065c8c025270c53_1552679506_4x3_sm.jpg',
          descricao: 'Campanha de Prevenção de Queimadas',
          created_at: '10/10/2011 18:22:00',
          titulo: 'Queimadas não!'
        }
      ]
    };
  },
  methods: {
     mostrar(noticia) {
      const vm = this;
      Noticia.listar(noticia)
        .then(response => {
          console.log(response.data);
          this.data = response.data;
        })
        .catch(e => {
          this.errors = e.response.data.errors;
          console.log(e.response.data.errors);
        });
    },
    remover (noticia) {
      if (confirm("Deseja excluir o noticia?")) {
        Noticia.apagar(noticia)
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
  mounted() {
    this.mostrar();
  },
};
</script>

<style lang="stylus" scoped>


.dash {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.dashboard{
   display: flex;
   flex-direction: column;
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
