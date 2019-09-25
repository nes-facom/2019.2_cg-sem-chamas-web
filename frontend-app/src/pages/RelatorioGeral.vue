<template>
  <div class="relatorioGeral">
    <h3>Estatística das denúncias</h3>
    <h5>Total de denúncias</h5>
    <h3>Estatísticas gerais</h3>
    <div class="numerosGerais">
      <div class="dncTotais"></div>
      <div class="dncMes"></div>
      <div class="dncDia"></div>
    </div>
    <q-btn>DETALHAR</q-btn>
  </div>
</template>

<style scoped>
.relatorioGeral {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
}
.numerosGerais {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  text-align: center;
}
/* .dncTotais{}
.dncMes{}
.dncDia{}
.q-btn{} */
</style>
