<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-grey-8 text-white">
      <q-toolbar>
        <q-btn flat round dense icon="lavinia" class="q-mr-sm" />

        <q-toolbar-title text-center style="font-size: 16px; margin-left: 60px"
          >CG SEM CHAMAS</q-toolbar-title
        >
        <q-btn flat round dense icon="more_vert" class="q-mr-sm" />
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
