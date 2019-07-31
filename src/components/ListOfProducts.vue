<template>
  <ul class="listOfProducts">
    <li v-for="(product, index) in products" :key="index" class="product">
      <img :src="product.image" alt="">
        <h2 class="product-name">
          {{ product.name }}
        </h2>
      <div class="product-price">
        <div class="pull-left pt-10">
          <span>{{ product.price }} {{product.currency}}</span>
        </div>
         <btn btnColor="btn btn-small btn-danger pull-right"
          :cartIcon="true"
          @click.native="addProductToCart(product)">
        Add Basket
      </btn>
      </div>
      
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex';
import btn from './Btn';

export default {
  props: ['products'],

  components: {
    btn,
  },
  methods: {
    ...mapActions([
      'addProduct',
      'currentProduct',
    ]),

    addProductToCart(product) {
      this.addProduct(product);
    },
    addCurrentProduct(product) {
      this.currentProduct(product);
    },
  },
};
</script>

<style scoped>
  .listOfProducts {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
  }

  .product {
    width: 50%;
    background-color: #fff;
    list-style: none;
    box-sizing: border-box;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #cfd1d0;
    margin-right:-1px; 
    margin-bottom:-1px;
  }

  .product-name {
    font-size: 1.2em;
    font-weight: normal;
  }

  .product-name:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .product-price {
    width: 100%;
    align-self: flex-start;
    display: inline-block;
    justify-content: space-between;
    margin-bottom: .5em;
  }

  .product-btn {
    width: 40%;
    display: inline-block;
  }

  .pull-left {
    float: left;
  }

  .pull-right {
    float: right;
  }

  .pt-10 {
    padding-top: 0.7em;
  }

  img {
    width: 200px;
    height: 200px;
  }


  

</style>

