<template>
  <div class="checkout-box">
    <ul class="checkout-list">
      <transition-group name="fade">
      <li v-for="(product, index) in getProductsInCart" :key="index" class="checkout-product">
        <div class="product-image">
          <img :src="product.image" alt="" class="image">
          <div>
            <btn class="pull-left mt-5" btnColor="btn btn-circle">-</btn>
            <input class="input-text pull-left" type="text" name="" id="" value="1">
            <btn class="pull-left mt-5" btnColor="btn btn-circle">+</btn>
          </div>
        </div>
        
        <h3 class="product-name">{{ product.name }}</h3>
        <span class="product-price">{{ product.price }} {{product.currency}} </span>
        <btn btnColor="btn btn-small btn-danger"
            @click.native="remove(index)">
            Remove
        </btn>
      </li>
      </transition-group>
    </ul>
    <div v-if="!hasProduct()" class="checkout-message">
      <h3>No products...</h3>
      <router-link to="./">Back to list of products</router-link>
    </div>
    <h3 class="total" v-if="hasProduct()">
      Total: {{ totalPrice() }} TL
    </h3>
    <div class="" v-if="hasProduct()">
      <router-link to="/">
        <btn btnColor="btn btn-large btn-info display-ib">
          Continue Shopping
        </btn>
      </router-link>
    <btn btnColor="btn btn-large btn-danger display-ib">
          Place Order
    </btn>
    </div>
    
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import btn from './Btn';

export default {
  components: {
    btn,
  },
  computed: {
    ...mapGetters([
      'getProductsInCart',
    ]),
  },

  methods: {
    ...mapActions([
      'removeProduct',
    ]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    totalPrice() {
      return this.getProductsInCart.reduce((current, next) =>
        current + next.price, 0);
    },
    remove(index) {
      this.removeProduct(index);
    },
  },
};
</script>

<style scoped>
  .checkout-box {
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1em;
  }

  .checkout-list {
    padding: 0;
  }

  .checkout-product {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr .5fr;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
    border-radius: 5px;
    list-style: none;
    box-sizing: border-box;
    padding: .8em;
    margin: 1em 0;
  }


  .checkout-product * {
    place-self: center;
  }
  .product-image {
    grid-column: 1/2;
    
  }

  .image {
    width: 99%;
  }


  .product-name {
    box-sizing: border-box;
  }

  .product-price {
    font-size: 1.2em;
    font-weight: bold;
  }

  .product-remove {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 0;
    background-color: #E0E0E0;
    color: #fff;
    cursor: pointer;
  }

  .total {
    font-size: 2em;
    font-weight: bold;
    align-self: flex-end;
  }

  .checkout-message {
    font-size: 1.5em;
  }

  .display-ib {
    display: inline-block;
    width: 45%;
    margin-left: 40px;
  }

  .input-text {
    width: 40%;
    margin-left: 10px;
    text-align: center;
  }

  .pull-left {
    float: left;
  }

  .mt-5 {
    margin-top: 5px;
  }
</style>
