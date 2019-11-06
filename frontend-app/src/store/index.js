import Vue from 'vue';
import Vuex from 'vuex';
import Map from './module/MapStore';
import Dialog from './module/DialogStore';
import Denuncia from './module/DenunciaStore';
import Session from './module/Session.js';

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      Map,
      Dialog,
      Denuncia,
      Session
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  });

  return Store;
}
