<template>
  <div class="homeLogged" style="height: 100vh;
  width: 100vw;">
    <q-toolbar class="toolbar">
      <q-btn flat round dense>
        <q-icon name="menu" />
      </q-btn>
      <q-toolbar-title>CG SEM CHAMAS</q-toolbar-title>
      <q-btn flat round dense>
        <q-icon name="more_vert" />
      </q-btn>
    </q-toolbar>

    <div class="q-gutter-y-md" style="max-width: 600px">
      <q-card>
        <q-tabs class="tabs" v-model="tab" dense indicator-color="primary" narrow-indicator>
          <q-tab name="home" icon="home" label="HOME" />
          <q-tab name="minhasDenuncias" icon="library_books" label="MINHAS DENÚNCIAS" />
          <q-tab name="noticias" icon="home" label="Notícias" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="home">
            <div class="text-h6">Mails</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="minhasDenuncias">
            <div class="text-h6">Alarms</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="noticias">
            <div class="text-h6">Movies</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.homeLogged {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
  background-color: #ffffff;
}
.toolbar {
  background-color: #616161;
  color: #f4853e;
}
.tabs {
  background-color: #616161;
}
.tabs .q-tab {
  color: #f4853e;
}
</style>
