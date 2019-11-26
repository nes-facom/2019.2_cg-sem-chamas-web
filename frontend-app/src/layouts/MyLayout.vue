<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar class="bg-grey-8  text-white  shadow-2">
        <q-btn
          flat
          round
          dense
          icon="arrow_back"
          class="q-mr-sm"
          @click="voltar()"
        />
        <q-btn stretch flat label="CG SEM CHAMAS" style="font-size: 13px;" />

        <q-space />

        <q-btn-dropdown
          v-show="userId != null"
          stretch
          flat
          style="font-size: 13px;"
          :label="usuario"
        >
          <q-list>
            <q-item clickable v-close-popup tabindex="0" @click="buscar()">
              <q-item-section avatar>
                <q-avatar icon="search" text-color="primary" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Buscar por protocolo</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup tabindex="0" @click="logout()">
              <q-item-section avatar>
                <q-avatar icon="exit_to_app" text-color="primary" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Sair</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
import User from "../boot/login";

export default {
  name: "MyLayout",

  data() {
    return {
      leftDrawerOpen: false,
      usuario: "Usuário",
      logado: true
    };
  },
  methods: {
    setarNome() {
      this.usuario = this.nome;
    },
    voltar() {
      window.history.back();
    },
    buscar() {
      this.$router.push("/denuncia/buscar");
    },

    logout() {
      const vm = this;
      let token = localStorage.getItem("userToken");
      User.deslogar(token)
        .then(() => {
          localStorage.removeItem("userToken");
          vm.$store.commit("Session/updateNome", null);
          vm.$store.commit("Session/updateEmail", null);
          vm.$store.commit("Session/updateTelefone", null);
          vm.$store.commit("Session/updateId", null);
          vm.$router.push("/login");
        })
        .catch(() => {
          localStorage.removeItem("userToken");
          vm.$router.push("/login");
        });
    }
  },
  computed: {
    ...mapState({ nome: state => state.Session.nome }),
    ...mapState({ userId: state => state.Session.id })
  },
  mounted() {
    this.setarNome();
  }
};
</script>
