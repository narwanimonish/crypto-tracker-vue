<template>
  <div class="container">
    <h2 class="mt-5 mb-3">Top 100 Crypto currencies</h2>

    <b-table
      hover
      bordered
      fixed
      responsive
      id="my-table"
      :items="currencies.coins"
      :per-page="perPage"
      :current-page="currentPage"
      :fields="fields"
      small
    >
      <template #cell(icon)="data">
        <img
          class="img-thumbnail row-thumbnail"
          :src="data.item.iconUrl"
          alt=""
        />
      </template>
      <template #cell(price)="data"> $ {{ data.item.price }} </template>
      <template #cell(change)="data">
        <span class="green" v-if="data.item.change >= 0"
          >{{ data.item.change }}%</span
        >
        <span class="red" v-else>{{ data.item.change }}%</span>
      </template>
    </b-table>

    <div class="row">
      <div class="col-md-8">
        <b-pagination
          v-model="currentPage"
          :total-rows="currencies.coins.length"
          :per-page="perPage"
          aria-controls="my-table"
          limit="8"
        ></b-pagination>
      </div>
      <div class="col-md-4">
        <div class="form-group row">
          <label class="col-form-label" for="per_page">Per Page</label>
          <div class="col-md-4">
            <select
              class="form-control"
              name="per_page"
              id="per_page"
              v-model="perPage"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
export default {
  data() {
    return {
      currencies: [],
      perPage: 10,
      currentPage: 1,
      fields: ['icon', 'name', 'price', 'symbol', 'change'],
    };
  },
  created() {
    this.getTopCurrencyList();
    setInterval(() => {
      this.getTopCurrencyList();
    }, 10000);
  },
  methods: {
    async getTopCurrencyList() {
      this.currencies = await this.$store.dispatch(
        'getListOfTopCrypoCurrencies'
      );
    },
  },
};
</script>

<style scoped>
.row-thumbnail {
  max-width: 50px;
}
.green {
  color: green;
}
.red {
  color: red;
}
</style>
