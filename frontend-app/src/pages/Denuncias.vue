<template>
  <div>
    <div v-for="i of info" v-bind:key="i._id">{{i.name}} {{i.adress}}</div>
    <div>
      <h6>Form</h6>Nome:
      <input type="text" v-model="name" />
      <br />Endereço:
      <input type="text" v-model="adress" />
      <br />
      <img class="img_camera" :src="base64" width="100" />
      <!-- <input type="file" id="file" ref="file" v-on:change="fileUpload()" /> -->
      <input type="submit" @click="denunciar()" />
    </div>
  </div>
</template>

<script>
import { denuncias } from "boot/axios";
export default {
  name: "Denuncias",
  data() {
    return {
      count: 0,
      info: null,
      name: "oi",
    };
  },
  methods: {
    fileUpload() {
      this.file = this.$refs.file.files[0];
    },
    denunciar() {
      // let formData = new FormData();
      // formData.append("file", this.file);
      let vm = this;
      denuncias
        .post("denuncias", {
          name: this.name,
          adress: this.adress
        })
        .then(function(response) {
          console.log(response);
          console.log("oi");
          vm.listar();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    listar() {
      denuncias
        .get("denuncias")
        .then(
          response => ((this.info = response.data), console.log(response.data))
        );
    }
  },
  mounted() {
    this.listar();
  }
};
</script>

<style>
</style>
