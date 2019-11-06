<template>
  <div
    class="container"
    style="height: 92vh"
  >

    

    <div class="dash">
      <div class="dashboard">

        <h2>Denúncias </h2>
        <div class="tabela">
      
        </div>

      </div>
    </div>
      </q-scroll-area>
  </div>
</template>

<script>
import Denuncia from "../boot/denuncia";
export default {
  data () {
    return {
      
  },
  methods: {
  
  },
  mounted () {
  }

}


</script>
<style lang="stylus" scoped>
p {
  margin: 0;
}

.container {

  display: flex;
  flex-direction: row;
}






.dash {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.dashboard{
   display: flex;
   flex-direction: column;
}

.dashboard h2 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 39px;
  line-height: 46px;
  margin-top: 10px;
}



</style>
