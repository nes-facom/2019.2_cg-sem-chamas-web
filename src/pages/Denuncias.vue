<template>
  <div>
    <div v-for="denuncia of denuncias" v-bind:key="denuncia.id">
      {{ denuncia.id }} {{ denuncia.endereco }} {{ denuncia.protocolo }}
      <button
        @click="editar(denuncia)"
        class="waves-effect btn-small blue darken-1"
      >
        <i class="material-icons">create</i>
      </button>
      <button
        @click="remover(denuncia.id)"
        class="waves-effect btn-small red darken-1"
      >
        <i class="material-icons">delete_sweep</i>
      </button>
    </div>
    <div>
      <h6>Form</h6>
      Nome:
      <input type="text" v-model="denuncia.endereco" />
      <br />Endereço: <input type="text" v-model="denuncia.protocolo" />dress
      <br />Salvar
      <input type="submit" @click="salvar()" />
      Mostrar
      <input type="submit" @click="listar()" />
      Exibir
      <input type="submit" @click="mostrar(1)" />
      Apagar
      <input type="submit" @click="remover(1)" />
      Protocolo
      <input type="submit" @click="procurarProtoloco(4)" />
    </div>
  </div>
</template>

<script>
import Denuncia from '../boot/denuncia';
export default {
  name: 'Denuncias',
  data() {
    return {
      info: null,
      denuncia: {
        id: '',
        endereco: '',
        protocolo: ''
      },

      denuncias: [],
      errors: []
    };
  },
  methods: {
    listar() {
      Denuncia.listar()
        .then(response => {
          this.denuncias = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      console.log(this.denuncias);
    },
    salvar() {
      if (!this.denuncia.id) {
        Denuncia.salvar(this.denuncia)
          .then(response => {
            this.denuncia = {};
            alert('Cadastrado com sucesso!');
            this.listar();
            this.errors = {};
          })
          .catch(e => {
            this.errors = e.response.data.errors;
          });
      } else {
        Denuncia.atualizar(this.denuncia)
          .then(response => {
            this.denuncia = {};
            this.errors = {};
            alert('Atualizado com sucesso!');
            this.listar();
          })
          .catch(e => {
            this.errors = e.response.data.errors;
          });
      }
    },
    editar(denuncia) {
      this.denuncia = denuncia;
    },
    remover(denuncia) {
      if (confirm('Deseja excluir o denuncia?')) {
        Denuncia.apagar(denuncia)
          .then(response => {
            this.listar();
            this.errors = {};
          })
          .catch(e => {
            this.errors = e.response.data.errors;
          });
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
    procurarProtoloco(denuncia) {
      Denuncia.procurar(denuncia)
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          this.errors = e.response.data.errors;
          console.log(e.response.data.errors);
        });
    }
  },
  mounted() {
    // this.listar();
  }
};
</script>

<style></style>
