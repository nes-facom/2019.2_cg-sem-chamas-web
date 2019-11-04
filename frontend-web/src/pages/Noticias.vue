<template>
  <div class="container" style="height: 100vh">
     <img
:src="capa"
            />
    <div class="titulo">
      <h4 style="text-align: left; width: 85%; margin-left: 25px;">Nova publicação</h4>
    </div>
    <div class="header" style="height: 50%">
    <div class="image" >




<label for='selecao-arquivo'>
  <a>
 <q-input
        type="file"
        v-model="image"
        class="img-input"
        @change="con()"
      >
       <template v-slot:prepend>
          <q-icon name="add_photo_alternate" />
        </template>
      </q-input>
</a>

  </label>



    </div>
    <div class="info">
      <div class="titulo">
        <q-input v-model="titulo" type="text" label="Título da Notícia" />
      </div>
      <div class="descricao">
        <q-input v-model="descricao" type="textarea" label="Descrição da Notícia" />

      </div>
    </div>
    </div>
    <div class="bottom">
      <template>
    <q-editor v-model="conteudo" class="editor" label="Conteúdo da Notícia"/>


</template>

      <q-btn class="btn-enviar" color="primary" icon="check" label="Postar" @click="postar()" />
    </div>
  </div>
</template>

<script>
const base64 = require('image-to-base64');
import Noticia from "../boot/noticia";
export default {
  data () {
    return {
      titulo: "",
      descricao: "",
      capa: "",
      conteudo: "",
      image: ""
      }},

  methods: {
    con(){
console.log(this.image)
    },
    postar(){
      const vm = this
      const conteudonoticia = {
        capa: this.capa,
        titulo: this.titulo,
        descricao: this.descricao,
        conteudo: this.conteudo
      };

       Noticia.postar(conteudonoticia)
        .then(response => {
          console.log(response);
          console.log(response.data.token);

          vm.status = response.data.status;

        })
        .catch(e => {
          console.log(e)
        });

    },

  base(){
      const vm = this
      console.log(this.image)
  base64().then(
        (response) => {
            console.log(response);
            vm.capa = `data:image/jpeg;base64, ${response}`;
            console.log(vm.capa);
        }
    )
    .catch(
        (error) => {
            console.log(error);
        }
    )
  }


}
}
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

.img-input{
  padding: 350px;
  width: 20px;
}
</style>
