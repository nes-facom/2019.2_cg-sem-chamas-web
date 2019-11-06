<template>
  <div class="container" style="height: 100vh">
    <div class="titulo">
      <h4 style="text-align: left; width: 85%; margin-left: 25px;">
        Nova publicação
      </h4>
    </div>

    <div class="header" style="height: 50%">
      <div class="image">
        <img v-show="capa != ''" :src="capa" style="height: 100%" />
        <div v-show="capa == ''">
          <q-icon class="text-grey" style="font-size: 2em" name="photo" />
        </div>
      </div>
      <div class="info">
        <div class="titulo">
          <q-input v-model="titulo" type="text" label="Título da Notícia" />
        </div>
        <div class="descricao">
          <q-input
            v-model="descricao"
            type="textarea"
            label="Descrição da Notícia"
          />
        </div>
        <div class="add-capa" style="margin-top: 20px">
          <q-input
            @input="
              val => {
                file = val[0];
              }
            "
            filled
            type="file"
            hint="Adicionar capa"
            v-model="image"
            @change="readURL(image)"
          />
        </div>
      </div>
    </div>
    <div class="bottom">
      <template>
        <q-editor
          v-model="conteudo"
          class="editor"
          label="Conteúdo da Notícia"
        />
      </template>

      <q-btn
        class="btn-enviar"
        color="primary"
        icon="check"
        label="Postar"
        @click="postar()"
      />
    </div>
  </div>
</template>

<script>
import Noticia from '../boot/noticia';
export default {
  data() {
    return {
      titulo: '',
      descricao: '',
      capa: '',
      conteudo: '',
      image: ''
    };
  },

  methods: {
    readURL(input) {
      const vm = this;
      if (input && input[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
          vm.capa = e.target.result;
        };
        reader.readAsDataURL(input[0]);
      }
    },
    postar() {
      const vm = this;
      const conteudonoticia = {
        capa: this.capa,
        titulo: this.titulo,
        descricao: this.descricao,
        conteudo: this.conteudo,
        user_id: 1
      };

      Noticia.postar(conteudonoticia)
        .then(response => {
          console.log(response);
          console.log(response.data.token);

          vm.status = response.data.status;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

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

.header .image .img-preview{
  width: 75%;
}

input[type='file'] {
  display: none
}


.img label {

  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  margin: 10px;
  padding: 6px 20px
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
