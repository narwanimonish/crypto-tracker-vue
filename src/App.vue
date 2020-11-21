<template>
  <div id="app">
    <div class="container">
      <list-currencies />
    </div>
  </div>
</template>

<script>
import ListCurrencies from './components/ListCurrencies';
export default {
  name: 'App',
  components: {
    ListCurrencies,
  },
  created() {
    this.$store.dispatch('getListOfTopCrypoCurrencies');
  },
};
</script>
