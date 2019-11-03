<template>
  <transition
    appear
    enter-active-class="animated slideInUp"
    leave-active-class="animated slideOutDown"
  >
    <q-layout>
      <div id="location-map">
        <GmapMap
          :options="{
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
            draggable: !isBlink,
            gestureHandling: 'greedy',
            disableDefaultUI: true
          }"
          :center="{ lat: clat, lng: clng }"
          :zoom="15"
          map-type-id="roadmap"
          style="width: 100vw; height: 100vh"
          @center_changed="update('reportedCenter', $event)"
        >
          <GmapAutocomplete
            class="search-bar"
            placeholder="    Digite a localização..."
            @place_changed="setPlace"
          ></GmapAutocomplete>

          <GmapMarker
            :icon="{ url: 'https://i.imgur.com/7loqWst.png' }"
            v-for="(marker, index) in markers"
            :key="index"
            :position="marker.position"
            width="20"
          />
          <GmapMarker
            v-if="this.place"
            label="★"
            :position="{
              lat: this.clat,
              lng: this.clng
            }"
          />
        </GmapMap>

        <div class="google-map-marker">
          <!-- <q-icon
          :class="{fablink: isBlink}"
          name="fas fa-fire-alt"
          class="text-red"
          style="font-size: 1em"
          />-->
          <img
            src="https://i.imgur.com/ZAqhuNs.png"
            :class="{ fablink: isBlink }"
            alt
          />
        </div>
        <q-btn
          v-show="!selecao"
          class="fix-position"
          @click="fix()"
          round
          color="white"
          text-color="grey"
          icon="my_location"
          size="15px"
        />

        <div v-show="!selecao" class="gps-button">
          <q-btn
            push
            color="primary"
            label="Selecionar posição"
            @click="geoLocal()"
          />
        </div>

        <div
          v-show="selecao"
          align="center"
          style=" display: flex;
            justify-content: center;"
        >
          <div class="q-pa-md row items-start q-gutter-md">
            <q-card class="my-card bg-white text-primary">
              <q-card-section>
                <div class="text-h9">
                  <strong>Deseja utilizar esse endereço?</strong>
                </div>
              </q-card-section>

              <q-card-section class="text-endereco" style="font-size: 12px">{{
                enderecoS
              }}</q-card-section>

              <q-separator primary style="margin: 0px;" />

              <q-card-actions align="center">
                <!-- <q-btn flat @click="changeDialog()">Sim</q-btn> -->
                <q-btn style="font-size: 12px" flat @click="$router.go(-1)"
                  >Sim</q-btn
                >

                <q-btn style="font-size: 12px" flat @click="changeSelection()"
                  >Não</q-btn
                >
              </q-card-actions>
            </q-card>
          </div>
        </div>

        <!-- <div style="margin-top: 30px; background-color: #ccc; padding:30px;">
        <br />
        Your position: {{plat}} {{plng}}
        <br />Map center latitude:
        <button @click="fix()">teste</button>
        <input type="number" v-model.number="reportedCenter.lat" @change="updateMapCenter" />
        <br />Map center longitude:
        <input
          type="number"
          v-model.number="reportedCenter.lng"
          @change="updateMapCenter"
        />
        </div>-->
      </div>
    </q-layout>
  </transition>
</template>
<script>
document.addEventListener("deviceready", () => {}, false);

import {
  openURL,
  QLayout,
  QIcon,
  QBtn,
  LocalStorage,
  QCard,
  QCardActions,
  QCardSection,
  QInput,
  QSeparator
} from "quasar";
import { mapState } from "vuex";
import { store } from "../store/index";
import axios from "axios";
import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.API_GOOGLE,
    libraries: "places",
    region: "VI",
    language: "pt-BR"
  },
  mounted() {
    console.log("oi");
  }
});

export default {
  name: "Map",
  data() {
    return {
      endereco: null,
      bairro: null,
      description: null,
      markers: [],
      place: null,
      reportedCenter: {
        lat: -20.482636591109895,
        lng: -54.61966432310907
      },
      selecao: false,
      isBlink: false,
      clat: -20.482636591109895,
      clng: -54.61966432310907,
      plat: 0,
      plng: 0,
      count: false
    };
  },
  components: {
    openURL,
    QLayout,
    QIcon,
    QBtn,
    QCard,
    QCardActions,
    QCardSection,
    QInput,
    QSeparator
  },
  methods: {
    setDescription(description) {
      this.description = description;
    },
    setPlace(place) {
      this.place = place;
      (this.clat = this.place.geometry.location.lat()),
        (this.clng = this.place.geometry.location.lng()),
        (this.reportedCenter.lng = this.place.geometry.location.lng());
      this.reportedCenter.lat = this.place.geometry.location.lat();
      this.endereco = `${this.place.name}, ${this.place.vinnicity}`;
      this.$store.commit("Map/updateEndereco", this.endereco);
    },

    fix() {
      this.getlocation();
      this.clat = this.reportedCenter.lat;
      this.clng = this.reportedCenter.lng;
    },

    updateMapCenter(which, value) {
      this.center = _.clone(this.reportedCenter);
    },
    changeCenter(which, value) {
      this.center = _.clone(this.reportedCenter);
    },
    update(field, event) {
      if (field === "reportedCenter") {
        this.reportedCenter = {
          lat: event.lat(),
          lng: event.lng()
        };
      } else if (field === "bounds") {
        this.mapBounds = event;
      } else {
        this.$set(this, field, event);
      }
    },
    getlocation() {
      if (navigator.geolocation) {
        this.plat = null;
        this.plng = "Buscando...";
        navigator.geolocation.getCurrentPosition(
          position => {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            (this.clat = position.coords.latitude),
              (this.clng = position.coords.longitude),
              (this.plat = position.coords.latitude),
              (this.plng = position.coords.longitude),
              (this.reportedCenter.lat = position.coords.latitude),
              (this.reportedCenter.lng = position.coords.longitude),
              this.addMarker();
          },
          error => {
            this.plng = "Error...";
            var message_error;
            if (error.code == 1) {
              message_error =
                "Você não permitiu que o aplicativo utilize o GPS, altere suas permissões.";
            } else if (error.code == 2) {
              message_error =
                "Não foi possivel obter sua localização nesse momento.";
            } else {
              error.code == 3;
            }
            {
              message_error =
                "Não foi possivel obter sua localização, verifique se seu GPS está ativado.";
            }
            // this.$q.notify(message_error);
            console.log(error);
          },
          {
            maximumAge: 3000,
            timeout: 50000,
            enableHighAccuracy: true
          }
        );
      }
    },
    watchPosition() {
      if (navigator.geolocation) {
        this.plat = null;
        this.plng = "WBuscando...";
        navigator.geolocation.watchPosition(
          position => {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            (this.plat = position.coords.latitude),
              (this.plng = position.coords.longitude),
              // (this.reportedCenter.lat = position.coords.latitude),
              // (this.reportedCenter.lng = position.coords.longitude),
              this.deleteMarker();
            this.addMarker();
          },
          error => {
            this.plng = "WError...";
            // this.$q.notify(`WERROR ${error.code} : ${error.message}`)
            console.log(error);
          },
          {
            maximumAge: 3000,
            timeout: 30000,
            enableHighAccuracy: true
          }
        );
      }
    },
    changeSelection() {
      this.selecao = !this.selecao;
      this.isBlink = !this.isBlink;
    },
    changeDialog() {
      this.$store.commit("Dialog/changeDialogg", false);
    },
    geoLocal() {
      axios
        .get("https://maps.googleapis.com/maps/api/geocode/json?", {
          params: {
            latlng: `${this.reportedCenter.lat},${this.reportedCenter.lng}`,
            key: process.env.API_GOOGLE
          }
        })
        .then(response => {
          console.log("oi");
          console.log(response);
          console.log(response.data.results[0].formatted_address);
          this.endereco = response.data.results[0].formatted_address;
          this.$store.commit("Map/updateEndereco", this.endereco);
          this.changeSelection();
        })
        .catch(error => {
          console.log(error);
        });
    },

    addMarker() {
      this.markers.push({
        position: {
          lat: this.plat,
          lng: this.plng
        },
        opacity: 1,
        enabled: true
      });
    },

    deleteMarker() {
      this.markers = [];
    }
  },
  mounted() {
    this.watchPosition();
    this.getlocation();
    console.log(window.history);
  },
  computed: {
    ...mapState({ enderecoS: state => state.Map.enderecoS }),
    ...mapState({ dialogg: state => state.Dialog.dialogg }),
    google: VueGoogleMaps.gmapApi
  }
};
</script>

<style lang="css">
#location-map {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: transparent;
}
.google-map-title {
  position: absolute;
  top: 0px;
  color: #fff;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #027be3;
  border-bottom: 1px solid #ccc;
  text-align: center;
  margin-top: 0px;
  font-size: 18px;
  box-shadow: 0px 5px 5px #ccc;
}
.google-map-marker {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  margin-left: -15px;
  margin-top: -30px;
  height: 30px;
  width: 30px;
  font-size: 25px;
  color: #333;
  text-align: center;
}

.fix-position {
  box-shadow: 0px 0px 2px #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  bottom: 103px;
  z-index: 2;
  margin-left: -15px;
  margin-top: -30px;
  height: 40px;
  width: 40px;
  font-size: 25px;
  color: #333;
  text-align: center;
  border-radius: 50px;
}

.fix-positio {
  background: #027be3;
}

.vue-map-hidden {
  display: inherit !important;
}
.gps-button {
  margin-top: -110px;
  font-size: 26px;
  display: flex;
  justify-content: center;

  border-radius: 10px;

  padding: 5px;
  padding-top: 0;
  bottom: 60px;
}

.my-card {
  margin-top: -250px;
  width: 100vw;
  max-width: 280px;
}

.search-bar {
  position: absolute;
  top: 10px;
  left: 10%;
  color: #666;
  width: 80%;
  height: 50px;
  line-height: 50px;
  border: none;
  margin-top: 10px;
  box-shadow: 0px 5px 5px #ccc;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 18px;
}

@keyframes fa-blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}
.fablink {
  -webkit-animation: fa-blink 0.75s linear infinite;
  -moz-animation: fa-blink 0.75s linear infinite;
  -ms-animation: fa-blink 0.75s linear infinite;
  -o-animation: fa-blink 0.75s linear infinite;
  animation: fa-blink 0.75s linear infinite;
}

.text-h7 {
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.0125em;
}

.vue-map img {
  width: 10px;
}
</style>
