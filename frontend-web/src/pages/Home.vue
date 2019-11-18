<template>
  <div class="container" style="height: 100vh">
    <div class="estatisticas">
      <h1>Estatísticas de Denúncias</h1>
      <div class="cartao">
        <h2>TOTAL DE DENÚNCIAS</h2>
      </div>
      <div class="graf">
        <div class="grafico">
          <apexchart type="donut" :options="options" :series="series">
          </apexchart>
        </div>
      </div>
      <div class="gerais">
        <h3>ESTATÍSTICAS GERAIS</h3>
        <div></div>
      </div>
      <div class="rodape ">
        <div
          class="totais fit column justify-center items-center content-center"
        >
          <p class="h3">{{ totalDenuncias }}</p>
          <p>Total de Denúncias</p>
        </div>
        <div class="mes fit column justify-center items-center content-center">
          <p class="h3">{{ totalDenuncias }}</p>
          <p>Denúncias no mês</p>
        </div>
        <div class="dia fit column justify-center items-center content-center">
          <p class="h3">{{ totalDenuncias }}</p>
          <p>Denúncias no dia</p>
        </div>
      </div>
      <div class="botao">
        <q-btn
          color="primary"
          text-color="white"
          label="MOSTRAR DENUNCIAS"
          to="info"
          class="q-mt-md mostrar-denuncia"
        >
        </q-btn>
      </div>
    </div>
    <div class="dash">
      <div class="dashboard">
        <h2>Dashboard</h2>

        <div class="cartoes">
          <div class="gerenciar cart" @click="$router.push('/info')">
            <p>
              Gerenciar
              <strong>Denúncias</strong>
            </p>
          </div>
          <div class="relatorio cart">
            <p>
              Relatório
              <strong>Denúncias</strong>
            </p>
          </div>
          <div
            class="gerenciar cart"
            @click="$router.push('/gerenciarnoticias')"
          >
            <p>
              Gerênciar
              <strong>Noticias</strong>
            </p>
          </div>
        </div>
      </div>

      <div class="recentes">
        <div class="recentes-titulo">
          <div class="titulo">
            <h3>Denúncias Recentes</h3>
          </div>
          <div class="titulo">
            <a @click="mostrar()"
              ><q-icon
                name="refresh"
                class="text-green"
                size="sm"
                style="padding: 30px;"
            /></a>
          </div>
        </div>

        <q-table
          flat
          style="margin-top: 3px"
          class="my-sticky-column-table"
          :data="data"
          :columns="columns"
          row-key="protocolo"
          selection="multiple"
          :rows-per-page-options="[0]"
          :pagination.sync="pagination"
          hide-bottom
          hide-header
        >
          <template v-slot:body="props">
            <q-tr @click.native="$router.push('/info')" :props="props">
              <q-td key="created_at" :props="props"
                ><strong class="text-grey">{{
                  props.row.created_at | formatData
                }}</strong></q-td
              >

              <q-td key="endereco" :props="props"
                ><strong>{{ props.row.endereco }}</strong></q-td
              >

              <q-td key="protocolo" :props="props"
                ><strong class="text-primary">{{
                  props.row.protocolo
                }}</strong></q-td
              >
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import Denuncia from '../boot/denuncia';

export default {
  name: 'Dashboard',
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      totalDenuncias: 0,
      options: {
        colors: ['#F77726', '#AAA'],
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        pie: {
          expandOnClick: false
        }
      },
      series: [0, 25],
      labels: ['Mês', 'Geral', 'Ano'],
      pagination: {
        page: 1,
        rowsPerPage: 5,
        descending: true,
        sortBy: 'protocolo'
      },
      dados: null,
      columns: [
        {
          name: 'protocolo',
          required: true,
          label: 'Protocolo',
          align: 'left',
          field: row => row.protocolo,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'endereco',
          align: 'left',
          label: 'Endereço',
          field: 'endereco',
          sortable: true
        },
        {
          name: 'created_at',
          align: 'left',
          label: 'Data',
          field: 'created_at',
          sortable: true
        },
        {
          name: 'status',
          align: 'center',
          label: 'Status',
          field: 'status',
          sortable: true
        },
        {
          name: 'acoes',
          align: 'center',
          label: 'Ações',
          field: 'acoes',
          sortable: false
        }
      ],
      data: []
    };
  },
  filters: {
    formatData: data => {
      const dat = new Date(data);
      const formatData = dat.toLocaleString('pt-BR', {
        timeZone: 'America/Anchorage'
      });

      return formatData;
    }
  },
  methods: {
    reload() {
      window.location.reload();
    },
    mostrar(denuncia) {
      const vm = this;
      this.$q.loading.show({
        backgroundColor: 'orange',
        message: 'Atualizando dados do servidor...',
        messageColor: 'black'
      });
      Denuncia.listar(denuncia)
        .then(response => {
          console.log(response.data);
          this.data = response.data;
          vm.$q.loading.hide();
          this.total();
        })
        .catch(e => {
          console.log(e);
          vm.$q.loading.hide();
        });
    },
    total(denuncia) {
      Denuncia.contar(denuncia)
        .then(response => {
          console.log(response.data);
          this.totalDenuncias = response.data;
          this.series[0] = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.mostrar();
  }
};
</script>
<style lang="stylus" scoped>
p {
  margin: 0;
}

.botao .q-btn {
  margin-top: 30px;
  width: 60%;
  height: 50px;
}

.container {
  display: flex;
  flex-direction: row;
  background: #F3EEEE;
}

.estatisticas {
  width: 30%;
  text-align: center;
  background: #ddd;
  padding: 1% 1%;
  height: 100%;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
}

.estatisticas h1 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 31px;
  line-height: 40px;
}

.gerais h3 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 21px;

}

.totais .h3 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 33px;
  line-height: 42px;
}

.totais p {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
}

.mes .h3 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 33px;
  line-height: 42px;
}

.mes p {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
}

.dia .h3 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 33px;
  line-height: 42px;
}

.dia p {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
}

.cartao h2 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 21px;
  margin-top: 10px;
}

.rodape {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  justify-content: center;
}

.dash {
  width: 70%;
  padding: 1% 4%;
}

.cartoes {
  display: flex;
  flex-direction: row;
  margin-bottom: 2%;
  justify-content: space-between;
}

.dashboard h2 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 46px;
  margin-top: 10px;
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
  font-size: 13px;
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
  font-size: 13px;
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
  font-size: 13px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #F4853E;
  margin-left: 60px;
}

.graf{
  display: flex;
  align-items: center;
  justify-content: center;
}
.grafico {
  width: 75%;

}

.cart {
  width: 31%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  height: 100px;
  text-align: center;
  text-transform: uppercase;
  margin-right: 2%;
  justify-content: center;
  align-items: center;
  display: flex;
}

.cart h3 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 23px;
  text-align: center;
  color: #FFFFFF;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 30px;
  max-width: 100px;
}

.cart h3 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 23px;
  text-align: center;
  color: #FFFFFF;
}

.cart p {
  font-family: Roboto;
  font-style: normal;
  font-size: 17px;
  line-height: 23px;
  text-align: center;
  color: #FFFFFF;
  max-width: 100px;
}

.gerenciar {
  background: #F77726;
}

.gerenciar:hover {
  background: #FF8940;
}

.relatorio {
  background: #FB561E;
}

.relatorio:hover {
  background: #FF6A38;
}

.cadastrar {
  background: #FBC22B;
}

.cadastrar:hover {
  background: #FFCD45;
}

.titulo h3 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
}

.recentes {
  background: #FFFFFF;
  border-radius: 19px;
  width: 98%;
  padding: 1% 4%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.recentes-titulo{
  display: flex;
  justify-content: space-between;
}
</style>
