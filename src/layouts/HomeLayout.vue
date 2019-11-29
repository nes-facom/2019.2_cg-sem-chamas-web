<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-primary text-white  shadow-2">
        <!-- <q-btn flat round dense icon="menu" class="q-mr-sm" />
        <q-separator dark vertical inset /> -->
        <q-btn stretch flat label="CG SEM CHAMAS" />

        <q-space />

        <q-btn-dropdown stretch flat :label="usuario">
          <q-list>
            <q-item
              v-show="userPerm == 1"
              clickable
              tabindex="0"
              @click="usuarios()"
            >
              <q-item-section avatar>
                <q-avatar icon="person" text-color="primary" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Gerênciar usuários</q-item-label>
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
      usuario: "Usuário do Sistema"
    };
  },
  methods: {
    setarNome() {
      this.usuario = this.nome;
    },
    voltar() {
      window.history.back();
    },
    usuarios() {
      this.$router.push("/gerenciarusuarios");
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
    ...mapState({ userPerm: state => state.Session.permission })
  },
  mounted() {
    this.setarNome();
  }
};
</script>
<style lang="stylus" scoped></style>
