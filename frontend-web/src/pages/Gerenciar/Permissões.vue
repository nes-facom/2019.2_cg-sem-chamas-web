<template>
  <div class="container" style="height: 92vh">
    <div class="dash">
      <div class="dashboard">
        <h2>Permissões</h2>

        <q-table
          flat
          :grid="$q.screen.xs"
          class="my-sticky-column-table"
          title="Permissões"
          :data="data"
          :columns="columns"
          row-key="description"
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
              <q-td key="name" :props="props">
                {{ props.row.name }}
              </q-td>

              <q-td key="slug" :props="props">{{ props.row.slug }}</q-td>

              <q-td key="description" :props="props">{{
                props.row.description
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
import Permissions from '../../boot/permissions';
export default {
  data() {
    return {
      pagination: {
        page: 1,
        rowsPerPage: 5,
        descending: true,
        sortBy: 'description'
      },
      permissions: [],
      selected: [],
      filter: '',
      select: [],

      dados: null,
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Name',
          align: 'left',
          field: row => row.protocolo,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'slug',
          align: 'left',
          label: 'Slug',
          field: 'slug',
          sortable: true
        },

        {
          name: 'description',
          align: 'left',
          label: 'Descrição',
          field: 'description',
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
          name:
            'https://f.i.uol.com.br/fotografia/2019/03/15/15526795065c8c025270c53_1552679506_4x3_sm.jpg',
          descricao: 'Campanha de Prevenção de Queimadas',
          description: '10/10/2011 18:22:00',
          slug: 'Queimadas não!'
        }
      ]
    };
  },
  methods: {
    mostrar(permission) {
      const vm = this;
      Permissions.listar(permission)
        .then(response => {
          console.log(response.data);
          this.data = response.data;
        })
        .catch(e => {
          this.errors = e.response.data.errors;
          console.log(e.response.data.errors);
        });
    },
    remover(permission) {
      if (confirm('Deseja excluir a permissão?')) {
        Permissions.apagar(permission)
          .then(response => {
            this.mostrar();
            this.errors = {};
          })
          .catch(e => {
            this.errors = e.response.data.errors;
          });
      }
    }
  },
  mounted() {
    this.mostrar();
  }
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
