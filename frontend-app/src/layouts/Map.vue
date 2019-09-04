<template>
  <q-layout>
    <div id="location-map">


      <GmapMap
        :options="{
   zoomControl: true,
   mapTypeControl: false,
   scaleControl: false,
   streetViewControl: false,
   rotateControl: false,
   fullscreenControl: false,
   draggable: !isBlink,
   gestureHandling: 'greedy'

       }"
        :center="{lat:clat, lng:clng}"
        :zoom="15"
        map-type-id="roadmap"
        style="width: 100vw; height: 100vh"
        @center_changed="update('reportedCenter', $event)"
      >
      <GmapAutocomplete class="search-bar" placeholder="   Digite a localização..." @place_changed="setPlace"></GmapAutocomplete>



        <button @click="usePlace">Add</button>
        <GmapMarker  :icon="{ url: 'https://lh4.ggpht.com/FRLzoxHDpRHxP6aFWxxQ1OUPlWnc55ZqnO7EpLtD8FBn6EK1zBerpF9P3BE3jJ6SFLNF7P0=w9-h9'}" v-for="(marker, index) in markers" :key="index" :position="marker.position" />
        <GmapMarker
          v-if="this.place"
          label="★"
          :position="{
          lat: this.clat,
          lng: this.clng,
        }"
        />
      </GmapMap>

      <div class="google-map-marker">
        <q-icon
          :class="{fablink: isBlink}"
          name="fas fa-fire-alt"
          class="text-red"
          style="font-size: 1em"
        />


      </div>

      <div class="fix-position" @click="fix()" >

  <q-icon name="gps_fixed" class="text-grey-8" style="font-size: 1.7rem;"  />
      </div>


      <div v-show="!selecao" class="gps-button">
        <q-btn push color="primary" label="Selecionar posição" @click="geoLocal()" />
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
              <div class="text-h6">Local selecionado está correto?</div>
            </q-card-section>

            <q-card-section>{{endereco}} , {{bairro}}</q-card-section>

            <q-separator primary />

            <q-card-actions align="center">
              <q-btn flat>Sim</q-btn>
              <q-btn flat @click="changeSelection()">Não</q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>

<div style="margin-top: 30px; background-color: #ccc; padding:30px;">
<br>Your position: {{plat}}  {{plng}}
<br>
Map center latitude:
<button @click="fix()">teste</button>
<button @click="addMarker()">add</button>
<button @center_changed="deleteMarker()">del</button>
      <input
        type="number"
        v-model.number="reportedCenter.lat"
        @change="updateMapCenter"
      />
      <br />Map center longitude:
      <input
        type="number"
        v-model.number="reportedCenter.lng"
        @change="updateMapCenter"
      />
</div>

    </div>
  </q-layout>
</template>
<script>

document.addEventListener('deviceready', () => {}, false)

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
import axios from "axios";
import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCoeKsbIdIIlv_lSsMi5eNLvX7NGagYTb4',
    libraries:'places',
    region: 'VI',
    language: 'pt-BR',
  },
  mounted(){
    console.log('oi')
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
      count:false,
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
      this.clat = this.place.geometry.location.lat(),
      this.clng = this.place.geometry.location.lng(),
      this.reportedCenter.lng = this.place.geometry.location.lng();
      this.reportedCenter.lat = this.place.geometry.location.lat();
      this.bairro = this.place.vicinity;
      this.endereco = this.place.name;
    },

    fix(){
      this.getlocation();
      this.clat = this.reportedCenter.lat;
      this.clng = this.reportedCenter.lng;
    },
    usePlace(place) {
      if (this.place) {

            this.clat = this.place.geometry.location.lat(),
            this.clng = this.place.geometry.location.lng()



      }
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
          this.plat = null
          this.plng = "Buscando..."
          navigator.geolocation.getCurrentPosition(
            position => {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              this.clat = position.coords.latitude,
              this.clng = position.coords.longitude,
              this.plat = position.coords.latitude,
              this.plng = position.coords.longitude,
              this.reportedCenter.lat = position.coords.latitude,
              this.reportedCenter.lng = position.coords.longitude,
              this.addMarker()
            },
            (error) => {
              this.plng = "Error..."
              this.$q.notify(`ERROR ${error.code} : ${error.message}`)
              console.log(error)
            }, {
          maximumAge: 3000, timeout: 30000, enableHighAccuracy: true
        }
          )

        }
      },
    watchPosition(){
       if (navigator.geolocation) {
          this.plat = null
          this.plng = "WBuscando..."
          navigator.geolocation.watchPosition(
            position => {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              this.plat = position.coords.latitude,
              this.plng = position.coords.longitude,
              this.reportedCenter.lat = position.coords.latitude,
              this.reportedCenter.lng = position.coords.longitude,
              this.deleteMarker()
              this.addMarker()

            },
            (error) => {
              this.plng = "WError..."
              this.$q.notify(`WERROR ${error.code} : ${error.message}`)
              console.log(error)
            }, {
          maximumAge: 3000, timeout: 30000, enableHighAccuracy: true
        }
          )

        }
    },
    changeSelection() {
      this.selecao = !this.selecao;
      this.isBlink = !this.isBlink;


    },
    geoLocal(){
      axios.get('https://maps.googleapis.com/maps/api/geocode/json?',{
      params: {
        latlng: `${this.reportedCenter.lat},${this.reportedCenter.lng}`,
        key: 'AIzaSyCoeKsbIdIIlv_lSsMi5eNLvX7NGagYTb4',
      }}
      ).then(response => {
              console.log("oi")
              console.log(response)
              console.log(response.data.results[0].formatted_address)
              this.endereco = response.data.results[0].formatted_address
							this.changeSelection()
						}).catch(error => {
				    			console.log(error)
							})


    },

    addMarker() {
      this.markers.push({
        position: {
          lat: this.plat,
          lng: this.plng,
        },
        opacity: 1,
        enabled: true,
        animation: google.maps.Animation.DROP,

      });

    },

    deleteMarker(){
      this.markers = [];
    }



  },
  mounted(){
    this.getlocation();
    this.watchPosition();

}
};
</script>

<style lang="css">
#location-map {
  position: absolute;
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
  border-radius: 2px;
}

.fix-positio{
  background: #027be3;
}





.vue-map-hidden {
  display: inherit !important;
}
.gps-button {
  margin-top: -75px;
  font-size: 26px;
  display: flex;
  justify-content: center;

  border-radius: 10px;

  padding: 5px;
  padding-top: 0;
  bottom: 60px;
}

.my-card {
  margin-top: -200px;
  width: 100vw;
  max-width: 350px;
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
</style>
