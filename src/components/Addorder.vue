<template>
  <section>
    <PublicTable :list="productList" @buylist="getBuylist"></PublicTable>

    <table class="table">
      <thead>
        <tr>
          <th>產品名稱</th>
          <th>價格</th>
          <th>顏色</th>
          <th>數量</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in buylist" :key="item.id">
          <td>{{ item.productName }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.color }}</td>
          <td>{{ item.count }}</td>
        </tr>
      </tbody>
    </table>

    <form class="mb-3">
      <div class="form-row">
        <div class="form-group col-md-2">
          <label for="">交易網站</label>
          <select id="" class="form-control" v-model="orderlist.transactionWebsite">
            <option selected>google.com</option>
            <option>Wordpress.com</option>
            <option>Shopify.com</option>
            <option>Facebook.com</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="">客戶</label>
          <input type="text" class="form-control" v-model="orderlist.customer">
        </div>
        <div class="form-group col-md-2">
          <label for="">訂單編號</label>
          <input type="number" class="form-control" v-model="orderlist.orderNumber">
        </div>
        <div class="form-group col-md-2">
          <label for="">交易時間</label>
          <input type="date" class="form-control" v-model="orderlist.transactionTime">
        </div>
        <div class="col-md-2">
          總價格為 {{ orderlist.totalPrice }} 元
        </div>
      </div>
    </form>

    <button 
      class="btn btn-primary"
      @click="sendOrder"
      data-toggle="modal"
      data-target="#addOrderConfirm"
      :disabled="notice"
    >新增訂單
    </button>

    <div class="d-inline-block text-danger" v-if="isEmpty">
      <h4>欄位請勿留空</h4>
    </div>

    <Confirm :showConfirm="showConfirm" @sendConfirm="addNewOrder">
      <template v-slot:content>{{ ConfirmText }}</template>
    </Confirm>

  </section>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import PublicTable from '@/components/PublicTable'
import Confirm from '@/components/public/Confirm'
import { apiOrderListCreate } from '@/js/api.js'

export default {
  components: {
    PublicTable,
    Confirm
  },
  props: {
    productList: {
      type: [Object, Array, String],
      required: true
    }
  },
  data() {
    return {
      isEmpty: false,
      showConfirm:'',
      ConfirmText:'',
      notice: true,
      buylist:[],
      orderlist: {
        orderNumber: '',
        orderStatus: '已完成',
        transactionWebsite: '',
        transactionTime: '',
        customer: '',
        totalPrice: '',
        productlist:'',
      },
    }
  },
  watch: {
    buylist(val) {
      if (val !== []) {
        this.notice = false
      }
    }
  },
  methods: {
    getBuylist(list) {
      this.buylist = list
      this.pulsPrice()
    },
    pulsPrice() {
      let pricePlus = this.buylist.reduce((accumulator, currentValue) => {
        return accumulator + (currentValue.price*currentValue.count);
      },0)
      this.orderlist.totalPrice = pricePlus
    },
    sendOrder() {
      // 未完成：要判斷欄位是否空白
      for (let i in this.orderlist) {
        if (this.orderlist[i] === '') {
          this.isEmpty = true
          return
        }
      }
          console.log('新增訂單=>確認')
      //this.showConfirm = 'addOrderConfirm'
      //this.ConfirmText = '確認要新增此訂單？'
    },
    async addNewOrder() {
      //this.orderlist.transactionTime = new Date() //交易時間為現在
      this.orderlist.productlist = this.buylist
      console.log(this.orderlist)
      await this.addOrderList()
    },
    addOrderList() {
      apiOrderListCreate(this.orderlist)
        .then(res => {
          console.log(res)
          this.$router.push('home')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>