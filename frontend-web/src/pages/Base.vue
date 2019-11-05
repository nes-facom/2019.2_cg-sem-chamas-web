<template>
<div>
  <q-input v-model="image" type="file" label="Label" />
   <q-btn color="primary" icon="check" label="OK" @click="base()" />
  </div>

</template>
<script>
const base64 = require('image-to-base64');
export default {
  data () {
    return {
      image:''
    }
    },

  methods: {
    base(){
      const vm = this
      console.log(this.image)
  base64(vm.image).then(
        (response) => {
            console.log(response); //cGF0aC90by9maWxlLmpwZw==
        }
    )
    .catch(
        (error) => {
            console.log(error); //Exepection error....
        }
    )

    }
  }

  }


</script>
