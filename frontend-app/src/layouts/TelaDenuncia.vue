<template>

 <div class="container">
  <div class="logo">
    <p class="titulo">CLIQUEIMADAS</p>
  </div>
  <div class="img-centro">

  </div>
  <div class="frase">

  </div>
  <div class="btn-denuncia">
   <q-btn color="white"  push>
      <div class="row items-center no-wrap  botao-denuncia">
        <div class="text-center text-primary text-weight-bold">
          Denunciar
        </div>
      </div>
    </q-btn>
  </div>
  <div class="login">
    <a href="" class="login"></a>
  </div>
 </div>

</template>
<script>
import { openURL } from 'quasar'
export default {
  name: 'TelaDenuncia',

}
</script>
<style>
.container{

  background: #FB9727;
  width: 100vw;
  height: 100vh;
  max-width: 320px;
}

.logo{

font-family: Roboto;
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 21px;
text-align: center;
color: #FFFFFF;
}

.img-centro{

background: url('https://image.freepik.com/vetores-gratis/artista-da-mulher-que-pinta-uma-paisagem-do-outono_1456-707.jpg');

border: 17px solid #FB9727;
box-sizing: border-box;
border-radius: 396px;

}

.frase{


font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
text-align: center;

color: #FFFFFF;
}

.btn-denuncia{



}

.btn-denuncia > button{
height: 55px;
width: 200px;
}




.login{


font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;
}


</style>
