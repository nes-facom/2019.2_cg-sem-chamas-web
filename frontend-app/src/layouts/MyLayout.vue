<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-btn flat round dense icon="arrow_back_ios" class="q-mr-sm" @click="$router.go(-1)" />

        <q-toolbar-title text-center style="font-size: 16px; margin-left: 60px">DENUNCIAR</q-toolbar-title>
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
  }
};
</script>
