<template>

 <div class="container">
  <div class="logo">
    <p class="titulo">CLICG</p>
  </div>
  <div class="img-centro">

  </div>
  <div class="frase">
<p>Denuncie uma queimada e ajude a natureza</p>
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
    <a href="" class="login">ENTRAR NA CONTA</a>
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
  display: flex;
  background: #FB9727;
  width: 100vw;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;

}

.logo{
width: 320px;
font-family: Roboto;
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 21px;
text-align: center;
color: #FFFFFF;
margin-top: 5%;
}

.img-centro{
background-color: blue;
background: url('https://i.imgur.com/D8fTL9E.png');
width: 217px;
height: 217px;
border: 17px solid #FB9727;
box-sizing: border-box;
border-radius: 396px;

}

.frase p{
margin-top: 8%;
width: 300px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #FFFFFF;
}

.login a:link {
  color:#fff;
  text-decoration:none;
}
.login a:visited {
  color:#fff;
  text-decoration:none;
}
.login a:hover {
  color:#fff;
  text-decoration:underline;
}
.login a:active {
  color:#fff;
  text-decoration:underline;
  background-color:#000000;
}


.btn-denuncia button{
border-color: #FB9727;
margin-top: 10%;
height: 55px;
width: 250px;
}




.login{

width: 320px;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
margin-top: 5%;
text-align: center;

color: #FFFFFF;
}


</style>
