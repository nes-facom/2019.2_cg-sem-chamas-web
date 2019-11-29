<template>
  <div class="container" style="height: 92vh">
    <q-dialog v-model="medium">
      <q-card v-if="dados != null" style="width: 700px; max-width: 80vw;">
        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="X" v-close-popup />
        </q-card-actions>
        <q-card-section>
          <div class="text-h6">Editar notícia</div>
        </q-card-section>

        <q-card-section>
          <q-input
            type="text"
            v-model="dados.titulo"
            label="Título da Notícia"
          />
          <q-input
            type="textarea"
            v-model="dados.descricao"
            label="Descrição da Notícia"
          />
          <template>
            <q-editor
              class="editor"
              v-model="dados.conteudo"
              label="Conteúdo da Notícia"
            />
          </template>

          <q-input
            @input="
              val => {
                file = val[0];
              }
            "
            filled
            type="file"
            hint="Trocar capa"
            style="margin-bottom: 40px"
          />

          <q-btn
            class="btn-enviar"
            color="primary"
            icon="check"
            label="Editar"
            @click="
              editar(dados.id, dados.titulo, dados.descricao, dados.conteudo)
            "
            style="margin-bottom: 20px;"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="icon" full-width>
      <div
        v-if="dados != null"
        style="background: #fff; width: 100%;"
        class="dados"
      >
        <q-card flat style="width: 800px; max-width: 80vw; margin-top: 50px;">
          <q-card-section class="row items-center" style="margin: 0 5%;">
            <div class="text-h6">Dados da Notícia</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <q-card flat square class="my-card" style="display: flex;">
            <q-list>
              <q-item>
                <q-item-section>
                  <img
                    class="foto"
                    :src="dados.capa"
                    style="background: #fff; width: 100%"
                /></q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>
                  <q-item-label caption>Data</q-item-label>
                  <q-item-label>{{ dados.created_at }}</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable>
                <q-item-section>
                  <q-item-label caption>Titulo</q-item-label>
                  <q-item-label>{{ dados.titulo }}</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable>
                <q-item-section>
                  <q-item-label caption>Descrição</q-item-label>
                  <q-item-label>{{ dados.descricao }}</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable>
                <q-item-section>
                  <q-item-label caption>Conteudo</q-item-label>
                  <q-item-label v-html="dados.conteudo"
                    ><br /><br /><br
                  /></q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </q-card>
      </div>
    </q-dialog>
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
          :filter="filter"
          :pagination.sync="pagination"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="capa" :props="props">
                <img :src="props.row.capa" alt="" height="50" />
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
                  @click="noticiaSelecionada(props.row)"
                />
                <q-btn
                  color="orange"
                  style="font-size: 0.9em; width: 5px; height: 5px; margin-left: 5px"
                  icon="edit"
                  @click="editarNoticia(props.row)"
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
          <template v-slot:top-left>
            <q-btn
              color="primary"
              icon="add"
              label="Nova notícia"
              @click="$router.push('/noticias')"
            />
          </template>
          <template v-slot:top-right>
            <q-input
              borderless
              filled
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
import { mapState } from "vuex";

import Noticia from "../../boot/noticia";
export default {
  data() {
    return {
      pagination: {
        page: 1,
        rowsPerPage: 5,
        descending: true,
        sortBy: "created_at"
      },
      noticias: [],
      selected: [],
      filter: "",
      select: [],
      icon: false,
      medium: false,
      dados: null,
      columns: [
        {
          name: "capa",
          required: true,
          label: "Capa",
          align: "left",
          field: row => row.protocolo,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "titulo",
          align: "left",
          label: "Titulo",
          field: "titulo",
          sortable: true
        },

        {
          name: "created_at",
          align: "left",
          label: "Data",
          field: "created_at",
          sortable: true
        },
        {
          name: "acoes",
          align: "center",
          label: "Ações",
          field: "acoes",
          sortable: false
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
    noticiaSelecionada(dados) {
      this.icon = true;
      this.dados = dados;
    },
    editarNoticia(dados) {
      this.medium = true;
      this.dados = dados;
    },
    editar(id, titulo, descricao, conteudo) {
      const vm = this;
      const conteudonoticia = {
        titulo: titulo,
        descricao: descricao,
        conteudo: conteudo,
        user_id: this.idUser
      };

      Noticia.atualizar(id, conteudonoticia)
        .then(response => {
          console.log(response);
          console.log(response.data.token);
          vm.status = response.data.status;
          vm.medium = false;
        })
        .catch(e => {
          console.log(e);
        });
    },
    mostrar(noticia) {
      const vm = this;
      this.$q.loading.show({
        backgroundColor: "orange",
        message: "Atualizando dados do servidor...",
        messageColor: "black"
      });
      Noticia.listar(noticia)
        .then(response => {
          console.log(response.data);
          vm.data = response.data;
          vm.$q.loading.hide();
        })
        .catch(e => {
          vm.errors = e.response.data.errors;
          console.log(e.response.data.errors);
          vm.$q.loading.hide();
        });
    },
    remover(noticia) {
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
    }
  },
  mounted() {
    this.mostrar();
  },
  computed: {
    ...mapState({ idUser: state => state.Session.id })
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

.dados{
  display: flex;
  justify-content: center;
}
</style>
