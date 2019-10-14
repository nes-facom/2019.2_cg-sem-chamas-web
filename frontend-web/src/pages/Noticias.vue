<template>
     <div class="container" style="height: 120vh">


    <div class="form">
      <div><h2>Noticias</h2></div>
      <q-input outlined label="Título" :dense="dense" v-model="titulo" />
      <div class="q-pa-md q-gutter-sm">
    <q-editor
      v-model="editor"
      :definitions="{
        save: {
          tip: 'Save your work',
          icon: 'save',
          label: 'Salvar',
          handler: saveWork
        },
        upload: {
          tip: 'Upload to cloud',
          icon: 'cloud_upload',
          label: 'Upload',
          handler: uploadIt
        }
      }"
      :toolbar="[
        ['bold', 'italic', 'strike', 'underline'],
        ['upload', 'save']
      ]"
    />
  </div>
      <q-btn class="glossy" rounded color="deep-orange" label="Enviar" />
      </div>
     </div>

</template>

<script>
export default {
  data(){return{
     titulo,
  }

  }
}
</script>

<style lang="stylus" scoped>

.container{
  display:flex;
  justify-content :center;
  align-items:center;
}


.form{
  width: 70%;
  padding: 3% 4%;;
  text-align: center;
  height: 100%;
}

</style>
