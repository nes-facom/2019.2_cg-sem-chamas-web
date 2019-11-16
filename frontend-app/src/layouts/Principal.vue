<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-grey-8 text-white">
      <q-toolbar>
        <q-btn flat round dense icon="null" class="q-mr-sm" />

        <q-toolbar-title text-center style="font-size: 16px; margin-left: 60px"
          >CG SEM CHAMAS</q-toolbar-title
        >
        <q-btn
          flat
          round
          dense
          icon="exit_to_app"
          class="q-mr-sm"
          @click="logout()"
        />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" elevated>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import User from '../boot/login';
import { store } from '../store/index';

export default {
  data() {
    return {
      left: false
    };
  },
  methods: {
    logout() {
      const vm = this;
      let token = localStorage.getItem('userToken');
      User.deslogar(token)
        .then(() => {
          localStorage.removeItem('userToken');
          vm.$store.commit('Session/updateNome', null);
          vm.$store.commit('Session/updateEmail', null);
          vm.$store.commit('Session/updateTelefone', null);
          vm.$store.commit('Session/updateId', null);
          vm.$router.push('/login');
        })
        .catch(() => {
          localStorage.removeItem('userToken');
          vm.$router.push('/login');
        });
    },
    voltar() {
      window.history.back();
    }
  }
};
</script>
