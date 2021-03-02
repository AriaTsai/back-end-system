<template>
  <section>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>產品圖片</th>
            <th>產品編號</th>
            <th>產品名稱</th>
            <th>價格</th>
            <th>顏色</th>
            <th>庫存</th>
            <th>產品備註</th>
            <th>/</th>
            <th>/</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list" :key="item.id">
            <th><img :src="noimage" alt="" width="100" height="100"></th>
            <th>{{ item.productNumber }}</th>
            <th>{{ item.productName }}</th>
            <th>{{ item.price }}</th>
            <th>{{ item.color }}</th>
            <th>{{ item.inventory }}</th>
            <th>{{ item.remark }}</th>
            <th>數量<input type="number" min="0" :max="item.inventory" v-model="count[index]" placeholder="0"></th>
            <th><button class="btn btn-success" @click="additem(item,index)">加入訂單</button></th>
            <th></th>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import mouse from '@/assets/img/mouse.png'
export default {
  props: {
    list: {
      type: [Object, Array, String],
      required: true
    }
  },
  data() {
    return {
      noimage: mouse,
      count:[],
      buylist:[]
    }
  },
  methods: {
    additem(item, idx) {
      let newItem = item
      newItem['count'] = this.count[idx]
      let buyIdx = this.buylist.map(target => target.id).indexOf(newItem.id)
      buyIdx !== -1
      ? this.buylist[buyIdx].count = newItem.count
      : this.buylist.push(newItem)
      this.getBuylist()
    },
    getBuylist() {
      this.$emit('buylist', this.buylist)
    }
  }
}
</script>

<style>

</style>