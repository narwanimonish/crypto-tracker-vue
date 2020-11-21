import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    currencies: [],
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setCurrenciesList(state, currencies) {
      state.currencies = currencies;
    },
  },
  actions: {
    getListOfTopCrypoCurrencies(context) {
      return new Promise((resolve, reject) => {
        Vue.$http
          .get('https://api.coinranking.com/v1/public/coins/?limit=100')
          .then((response) => {
            if (response.status == 200) {
              context.commit('setCurrenciesList', response.data.data);
              resolve(response.data.data);
            } else {
              reject('error');
            }
          });
      });
    },
  },
});
