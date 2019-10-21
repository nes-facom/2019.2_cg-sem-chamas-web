<template>
  <div class="container" style="height: 100vh">
    <div class="titulo">
      <h4 style="text-align: left; width: 85%; margin-left: 25px;">Nova publicação</h4>
    </div>
    <div class="header" style="height: 50%">
    <div class="image">

      <div class="img">
        <a @click="mostrar()"><q-icon name="add_photo_alternate" class="text-grey" size="lg" style="padding: 30px;" /></a>

        </div>
    </div>
    <div class="info">
      <div class="titulo">
        <q-input v-model="text" type="text" label="Título da Notícia" />
      </div>
      <div class="descricao">
        <q-input v-model="text" type="textarea" label="Descrição da Notícia" />

      </div>
    </div>
    </div>
    <div class="bottom">
      <template>
    <q-editor v-model="editor" class="editor" label="Conteúdo da Notícia"/>


</template>

      <q-btn class="btn-enviar" color="primary" icon="check" label="Postar" @click="onClick" />
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.container{
  margin: 0 auto;
  width: 85%;
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
margin: 25px;

}

.header .info .titulo{
}

.header .info .descricao{
}

.header .image{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  background: #eee;
  margin: 25px;

}



.bottom{
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}

.editor{
  min-height:10%;
  margin-top:15px;
  margin-bottom: 25px;

  width:97%;
}

.btn-enviar{
  height: 50px;
  width: 10%;
}
</style>
