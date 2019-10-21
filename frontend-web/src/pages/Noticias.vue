<template>
  <div class="container" style="height: 100vh">
    <div class="header">
    <div class="image">

      <div class="img"><q-icon name="add_photo_alternate" /></div>
    </div>
    <div class="info">
      <div class="titulo">
        <q-input v-model="text" type="text" label="Título da Notícia" />
      </div>
      <div class="descricao">
        <q-input v-model="text" type="text" label="Descrição da Notícia" />
      </div>
    </div>
    </div>
    <div class="bottom">
      <q-editor v-model="editor" min-height="5rem" flat/>
      <q-btn color="primary" icon="check" label="OK" @click="onClick" />
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.container{
  display:flex;
  flex-direction:column;

}

.header{
  display:flex;
}

.info{
display: flex;
flex-direction:column;
width: 50%;

}

.header .info .titulo{
}

.header .info .descricao{
}

.header .image{
  justify-content: center;
  align-items: center;
  width: 50%;
}

.bottom{
  display:flex;
  flex-direction:column;
}
</style>
