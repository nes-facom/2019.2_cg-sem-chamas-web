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
        <q-btn stretch flat label="CG SEM CHAMAS" />

        <q-space />

        <q-btn-dropdown stretch flat :label="usuario">
          <q-list>
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
export default {
  data() {
    return {
      left: false
    };
  },
  methods: {
    voltar() {
      window.history.back();
    }
  }
};
</script>
