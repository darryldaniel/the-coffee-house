<template>
  <div class="container add-product__form">
    <div class="field">
      <label for="name" class="label">Name</label>
      <div class="control">
        <input v-model="name" type="text" id="name" class="input" placeholder="Product Name">
      </div>
    </div>
    <div class="field">
      <label for="price" class="label">Price</label>
      <div class="control">
        <input v-model="price" type="number" id="price" class="input" placeholder="Price">
      </div>
    </div>
    <div class="field">
      <label for="quantityInStock" class="label">Quantity In Stock</label>
      <div class="control">
        <input v-model="quantityInStock" type="number" id="quantityInStock" class="input" placeholder="Quantity In Stock">
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="button" @click="addProduct(name, price, quantityInStock)">ADD</button>
        <router-link class="button" to="/">BACK TO HOME</router-link>
      </div>
    </div>
    <p class="help is-success" v-bind:class="result ? 'is-success' : 'is-danger'">{{ message }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: function() {
    return {
      name: '',
      price: 0,
      quantityInStock: 0
    };
  },
  computed: {
    ...mapGetters({
      message: 'products/addProductResultMessage',
      result: 'products/addProductResult'
    })
  },
  methods: {
    addProduct(name, price, quantityInStock) {
      const payload = {
        name,
        price,
        quantityInStock
      };
      this.$store.dispatch('products/addProduct', payload);
    }
  }
};
</script>

<style lang="scss" scoped>
.add-product {
  &__form {
    padding: 1rem;
    text-align: left;
    max-width: 400px;
  }
}
</style>
