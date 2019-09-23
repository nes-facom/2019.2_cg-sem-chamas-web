<template>

        <div class="container">
            <div class="estatisticas">
                <h1>Estatiscas de Denúncias</h1>
                <div class="cartao">
                    <h2>TOTAL DE DENÚNCIAS</h2>
                </div>
                <div class="gerais">
                <h3>ESTATISTICAS GERAIS</h3>
                </div>
                <div class="rodape">

                        <div class="totais">
                        <h3>23</h3>
                          <p>Total de denuncias</p>
                        </div>
                        <div class="mes">
                        <h3>23</h3>
                          <p>Denuncias no mes</p>
                        </div>
                        <div class="dia">
                        <h3>23</h3>
                        <p>Denuncias no dia</p>
                        </div>
                </div>
                <div class="botao">
                </div>
            </div>
          <div class="dash">
          <div class="dashboard">
                    <h2>Dashboard</h2>
            <div class="cartoes">

                    <div class="gerenciar cart">
                        <h3>Gerenciar </h3>
                        <p>Denúncias</p>
                    </div>
                    <div class="relatorio cart">
                        <h3>Relatorio</h3>
                        <p>Denuncia</p>
                    </div>
                    <div class="cadastrar cart">
                        <h3>Cadastrar </h3>
                        <p>Denuncia</p>
                    </div>
                </div>
            </div>

            <div class="recentes">
                <div class="titulo">
                    <h3>Denúncias Recentes</h3>
                </div>
                <div class="lista">
                    <p class="data">23/09/2019 21:00</p>  <p class="endereco">Avenida afonso pena 3098</p> <p class="protocolo"> Q12345678901234</p>
                   </div>
                       <div class="lista">
                    <p class="data">23/09/2019 21:00</p>  <p class="endereco">Avenida afonso pena 3098</p> <p class="protocolo"> Q12345678901234</p>
                   </div>
                       <div class="lista">
                    <p class="data">23/09/2019 21:00</p>  <p class="endereco">Avenida afonso pena 3098</p> <p class="protocolo"> Q12345678901234</p>
                   </div>
            </div>
        </div>
        </div>


        </template>



<script>
export default {
  name: "Dashboard",
  data() {
    return {
        teste: 'olaaaaaaaaa'
    }
  }
}
</script>
<style>
.container{
background:#F3EEEE;
    display: flex;
    flex-direction: row;


}
.estatisticas{
    width: 35%;
    text-align: center;

 background: #ddd;
 padding-top: 15px;

}

.estatisticas h1{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 40px;
}

.gerais {

}

.gerais h3 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
}

.totais {

}

.totais h3 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
}

.totais p {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
}

.mes {

}

.mes h3 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
}

.mes p {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
}

.dia {

}

.dia h3 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
}

.dia p {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
}



.cartao h2 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
}

.rodape{
   display: flex;
   flex-direction: row;

justify-content: center;

}
.dash{
    width: 65%;
    padding: 0% 2%;
}



.cartoes{
  display: flex;
  flex-direction: row;
  margin-bottom: 2%;
  justify-content: space-between;



}

.dashboard{

}

.dashboard h2{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 39px;
  line-height: 46px;
}

.cart {
width: 25%;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 7px;
height: 110px;
text-align: center;
text-transform:uppercase;
margin-right: 2%;

}

.cart h3 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #FFFFFF;font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;




}

.cart h3 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #FFFFFF;

}

.cart p{
   font-family: Roboto;
   font-style: normal;
   font-size: 20px;
   line-height: 23px;
   text-align: center;
   color: #FFFFFF;
}

.gerenciar{
    background: #F77726;

}
.relatorio{
    background: #FB561E;
}

.cadastrar{
     background: #FBC22B;

}

.titulo {

}

.titulo h3 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
}

.recentes{
    background: #FFFFFF;
border-radius: 19px;
width: 90%;
padding: 3%;
align-items: end;
display: flex;
flex-direction: column;
}

.lista {
  display: flex;
  flex-direction: row;
  padding: 1%;
  width: 100%;
}

.endereco {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: 20px;
}

.data {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #aaa;

}

.protocolo {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #F4853E;
  margin-left: 60px;
}


</style>
