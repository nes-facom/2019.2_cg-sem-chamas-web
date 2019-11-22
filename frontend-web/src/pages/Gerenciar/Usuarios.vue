<template>
  <div class="container" style="height: 92vh">
    <div class="dash">
      <div class="dashboard">
        <h2>Usuários</h2>

        <q-table
          flat
          :grid="$q.screen.xs"
          class="my-sticky-column-table"
          title="Usuários"
          :data="data"
          :columns="columns"
          row-key="created_at"
          :filter="filter"
          :pagination.sync="pagination"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="nome" :props="props">
                {{ props.row.nome }}
              </q-td>
              <q-td key="email" :props="props">
                {{ props.row.email }}
              </q-td>
              <q-td key="permission" :props="props">
                <q-select
                  outlined
                  :value="props.row.roles | formatPermission"
                  @input="value => (date = value)"
                  label="Tipo de Usuário"
                >
                  <template v-slot:no-option>
                    <q-list bordered separator>
                      <q-item
                        clickable
                        v-ripple
                        @click="alterarPermissao(props.row.id, 1)"
                      >
                        <q-item-section>Administrador</q-item-section>
                      </q-item>
                      <q-item
                        clickable
                        v-ripple
                        @click="alterarPermissao(props.row.id, 2)"
                      >
                        <q-item-section>Membro do Comitê</q-item-section>
                      </q-item>
                      <q-item
                        clickable
                        v-ripple
                        @click="alterarPermissao(props.row.id, 3)"
                      >
                        <q-item-section>Usuário Comum</q-item-section>
                      </q-item>
                    </q-list>
                  </template>
                </q-select>
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
import User from "../../boot/login";
export default {
  data() {
    return {
      pagination: {
        page: 1,
        rowsPerPage: 5,
        descending: true,
        sortBy: "created_at"
      },
      selected: [],
      filter: "",
      select: [],

      dados: null,
      perm: 1,
      usuario: "Usuário Comum",
      columns: [
        {
          name: "nome",
          required: true,
          label: "Nome",
          align: "left",
          field: row => row.protocolo,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "email",
          align: "left",
          label: "E-mail",
          field: "email",
          sortable: true
        },

        {
          name: "permission",
          align: "left",
          label: "Tipo de Usuário",
          field: "permission",
          sortable: true
        }
      ],
      data: [
        {
          capa:
            "https://f.i.uol.com.br/fotografia/2019/03/15/15526795065c8c025270c53_1552679506_4x3_sm.jpg",
          descricao: "Campanha de Prevenção de Queimadas",
          created_at: "10/10/2011 18:22:00",
          titulo: "Queimadas não!"
        }
      ]
    };
  },
  methods: {
    alterarPermissao(id, perm) {
      console.log("oiii");
      console.log(id, perm);
      const vm = this;
      const permission = {
        roles: [perm]
      };

      User.atualizar(id, permission)
        .then(response => {
          console.log(response);
          console.log(response.data.token);
          vm.listar();
        })
        .catch(e => {
          console.log(e);
        });
    },
    mostrar() {
      const vm = this;
      User.listar()
        .then(response => {
          console.log(response.data);
          this.data = response.data;
        })
        .catch(e => {
          this.errors = e.response.data.errors;
          console.log(e.response.data.errors);
        });
    }
  },
  mounted() {
    this.mostrar();
  },
  filters: {
    formatPermission: data => {
      if (data == null) {
        return "Usuário";
      }
      switch (data) {
        case null:
          return "Administrador";
        case 2:
          return "Membro do Comitê";
        case 3:
          return "Usuário Comum";
      }
    }
  },
  watch: {
    roles(val) {
      const filter = val | formatPermission;
      this.roles = filter;
    }
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
