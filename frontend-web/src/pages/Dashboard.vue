<template>

        <div class="container full-height">
            <div class="estatisticas">
                <h1>Estatiscas de Denúncias</h1>
                <div class="cartao">
                    <h2>TOTAL DE DENÚNCIAS</h2>
                </div>
     <div class="grafico"> <apexchart  type="donut" :options="options" :series="series"></apexchart></div>
                <div class="gerais">
                <h3>ESTATISTICAS GERAIS</h3>
      <div>
    </div>

                </div>
                <div class="rodape ">

                        <div class="totais fit column wrap justify-center items-center content-center">
                        <p class="h3">23</p>
                          <p>Total de denuncias</p>
                        </div>
                        <div class="mes fit column wrap justify-center items-center content-center">
                        <p class="h3">23</p>
                          <p>Denuncias no mes</p>
                        </div>
                        <div class="dia fit column wrap justify-center items-center content-center">
                        <p class="h3">23</p>
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
                        <p>
                        Gerenciar
                          <strong>Denuncias</strong></p>
                    </div>
                    <div class="relatorio cart">
                        <p>
                        Relatorio
                          <strong>Denuncias</strong></p>
                    </div>
                    <div class="cadastrar cart">
                        <p>
                        Cadastrar
                          <strong>Denuncia</strong></p>
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
import VueApexCharts from 'vue-apexcharts'

export default {
  name: "Dashboard",
   components: {
        apexchart: VueApexCharts,
      },
  data() {
    return {
       options: {
         colors: ['#F77726','#AAA'],
          legend: {
      show: false},
         dataLabels: {
    enabled: false},
    pie: {
      expandOnClick: false
    }
       },
      series: [20, 200],
      labels: ["Mês", "Geral", "Ano"],



  }
  }
}
</script>
<style>

p{
  margin: 0;
}

.container{
background:#F3EEEE;
    display: flex;
    flex-direction: row;
    align-items: center;



}
.estatisticas{
    width: 35%;
    text-align: center;

 background: #ddd;
 padding: 3% 2%;
 height: 100%;

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

.totais .h3 {
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


.mes .h3 {
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



.dia .h3 {
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
margin-top: 25px;
justify-content: center;


}
.dash{
    width: 65%;
    padding: 0% 4%;
}



.cartoes{
  display: flex;
  flex-direction: row;
  margin-bottom: 2%;
  justify-content: space-between;



}

.dashboard h2{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 39px;
  line-height: 46px;
  margin-top: 10px;
}

.cart {
width: 31%;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 7px;
height: 130px;
text-align: center;
text-transform:uppercase;
margin-right: 2%;
justify-content: center;
align-items: center;
display: flex;


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
max-width: 100px;



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
   max-width: 100px;
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
width: 98%;
padding: 1% 3%;
align-items: end;
display: flex;
flex-direction: column;
margin-top: 20px;
}

.lista {
  display: flex;
  flex-direction: row;
  padding: 2% 1%;
  width: 100%;
  margin-bottom: 20px;
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

.grafico{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
