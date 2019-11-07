<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-primary text-white">
        <q-btn flat round dense icon="arrow_back" @click="voltar()" />
        <q-toolbar-title> </q-toolbar-title>

        <div>CG SEM CHAMAS</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data() {
    return {
      leftDrawerOpen: false
    };
  },
  methods: {
    voltar() {
      window.history.back();
    }
  }
};
</script>
<style lang="stylus" scoped>
.q-toolbar {
    position: relative;
    padding: 0 12px;
    min-height: 50px;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
}
</style>
