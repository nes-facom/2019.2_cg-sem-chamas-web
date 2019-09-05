<template>
 <div class="vuex">
   <div class="oi">

     <button @click="console()">oi</button>

   {{enderecoS}}
<input
        type="text"
        v-model="enderecoS"
      />
   </div>
 </div>
</template>

<script>
import { openURL } from 'quasar'
import  { mapState } from 'vuex'
import { store } from '../store/index'

export default {
  name: 'MyLayout',
  data () {
    return {
      novoEndereco: 'Novo endereço',
      endereco: 'Novo enderecoaa',
      
    }
  },
  methods: {
    openURL,
     console(){
      this.$store.commit('Map/updateEndereco', this.endereco)
    }
  },
  computed: {
   
  ...mapState({enderecoS: state => state.Map.enderecoS,})
},
  mounted(){
   this.console();
  }
}
</script>

<style>
</style>
