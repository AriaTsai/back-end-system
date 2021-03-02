<template>
  <section>
    <div class="btn-group">
      <button class="btn btn-info" @click="page='order'">新增訂單</button>
      <button class="btn btn-info" @click="page='product'">新增產品</button>
    </div>
    <Addorder :productList="productList" v-if="page==='order'"></Addorder>
    <AddProduct v-else></AddProduct>
  </section>
</template>

<script>
import { apiProductListAll } from '@/js/api.js'
import Addorder from '@/components/Addorder'
import AddProduct from '@/components/AddProduct'
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
export default {
  components: {
    Addorder,
    AddProduct,
  },
  data() {
    return {
      page:'order',
    }
  },
  computed: {
    productList() {
      return this.$store.state.product.productList
    }
  },
  methods: {
    async getData() {
      try {
        const list = await apiProductListAll();
        this.productList = list.data
        let img = new Blob([list.data[7].image])
        console.log(list.data[7].image)
        console.log(window.URL.createObjectURL(img))
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
    this.$store.dispatch('product/init_ProductList')
  }
}
</script>

<style>

</style>
