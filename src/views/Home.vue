<template>
  <section>
    <div class="home container-fluid p-0 mt-5">

      <div class="row">
        <p class="overview h3 font-weight-bold">OVERVIEW</p>
      </div>

      <div class="row first">
        <div class="box col-4">
          <div class="card">
            <div class="card-body">
              <div class="card-title h5">
                <i class='fas fa-hand-holding-usd' style='font-size:24px'></i>
                TOTAL REVENUE
              </div>
              <div class="card-text">
                <p class="text-success h2 font-weight-bold">{{ totalRevenue - totalCost }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="box col-4">
          <div class="card">
            <div class="card-body">
              <div class="card-title h5">
                <i class='fas fa-coins' style='font-size:24px'></i>
                TOTAL COST
              </div>
              <div class="card-text">
                <p class="text-danger h2 font-weight-bold">{{ totalCost }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="box col-4">
          <div class="card">
            <div class="card-body">
              <div class="card-title h5">
                <i class='fas fa-money-bill' style='font-size:24px'></i>
                NET INCOME
              </div>
              <div class="card-text">
                <p class="text-primary h2 font-weight-bold">{{ totalRevenue }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="box col-12">
          <div class="card">
            <div class="card-body">
              <div class="card-title h4">Activity</div>
              <div class="card-text">
                <!-- <p class="text-success h2 font-weight-bold">12,345</p> -->
                <highcharts :constructor-type="'stockChart'" :options="chartOptions" />
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="row">
        
        <div class="box col-md-6 col-sm-12">
          <div class="card">
            <div class="card-body">
              <div class="card-title h4">Transaction Website ( latest 30 days )</div>
              <div class="card-text Transaction table-responsive">
                <table class="table">
                  <tbody>

                    <tr v-for="item in view" :key="item.index">
                      <td scope="col"><i :class=item.icon style='font-size:36px'></i></td>
                      <td scope="col">{{ item.name }}</td>
                      <td scope="col">{{ item.total }}</td>
                      <td scope="col">
                        <i
                          :class="item.percent > 0 ? arrow.up.icon : arrow.down.icon"
                          :style="item.percent > 0 ? arrow.up.color : arrow.down.color"
                        />
                        </td>
                      <td>{{ item.percent }}%</td>
                    </tr>

                    <!-- <tr v-for ="item in websiteData" :key="item.name">
                      <td scope="col"><i :class=item.icon style='font-size:54px'></i></td>
                      <td scope="col">{{ item.name }}</td>
                      <td scope="col">{{ item.count }}</td>
                      <td scope="col"><i :class=item.grow :style=item.growColor></i></td>
                      <td>{{ item.percent }}</td>
                    </tr> -->

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="box col-md-6 col-sm-12">
          <div class="card">
            <div class="card-body">
              <div class="card-title h4">Latest Orders</div>
              <div class="card-text Latest">

                <div class="item row" v-for="item in orderList.slice(-3).reverse()" :key="item.id">
                  <div class="col-3 p-0 align-self-center"><img :src="IMG" alt="" width="100"></div>
                  <div class="product col-6 align-self-center">
                    <div class="product-name h5 font-weight-bold">訂單編號：{{ item.orderNumber }}</div>
                    <div class="product-info">
                      <div class="buy-date mb-2">
                        <i class='fas fa-clock' style='font-size:16px'></i>
                        {{ item.transactionTime }}
                      </div>
                      <div class="buyer">
                        <i class='fas fa-user-circle' style='font-size:16px'></i>
                        {{ item.customer }}
                      </div>
                    </div>
                  </div>
                  <div class="total col-2 p-0 align-self-end">
                    <div class="total text-right">Total</div>
                    <div class="total-price font-weight-bold h5">{{ item.totalPrice }}</div>
                  </div>
                </div>
                <!-- <div class="item row" v-for="item in latestOders" :key="item.id">
                  <div class="col-4 p-0 align-self-center"><img :src="item.product_image" alt="" width="100%"></div>
                  <div class="product col-6 align-self-center">
                    <div class="product-name h5 font-weight-bold">{{ item.product }}</div>
                    <div class="product-info">
                      <div class="buy-date mb-2">
                        <i class='fas fa-clock' style='font-size:16px'></i>
                        {{ item.datetime }}
                      </div>
                      <div class="buyer">
                        <i class='fas fa-user-circle' style='font-size:16px'></i>
                        {{ item.customer }}
                      </div>
                    </div>
                  </div>
                  <div class="total col-2 p-0 align-self-end">
                    <div class="total text-right">Total</div>
                    <div class="total-price font-weight-bold h5">{{ item.original_price }}</div>
                  </div>
                </div> -->


              </div>
            </div>
          </div>
        </div>


      </div>
    </div>

  </section>
</template>

<script>
import mouse from '@/assets/img/mouse.png'
import fakeData from '@/js/fakeData'
import { mapGetters } from 'vuex';
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      arrow: {
        down: {icon:"fas fa-arrow-down", color:'font-size:24px;color:red'},
        up: {icon: "fas fa-arrow-up", color:'font-size:24px;color:red'}
      },
      IMG: mouse,
      image: fakeData.randomImage,
      chartOptions: {
        chart: { type: "spline" },
        title: { text: "公司收支曲線" },
        tooltip: { shared: true },
        xAxis: {
          type:'datetime',
          dateTimeLabelFormats: {
            // day: '%H:%M',
            month: '%b \'%y',
            // year: '%Y',
          }
        },
        yAxis: {
          title: { text: "price" },
        },
        series: [
        ],
        //rangeSelector: { enabled: false, }, //日期選擇按鈕
        scrollbar: { enabled: false, }, //X軸滾輪
        navigator: { enabled: false, }, //x軸導航條
      },
      view:[
        {
          name: 'Facebook.com',
          total: '',
          icon: 'fab fa-facebook-square',
          percent: '',
          arrow: '',
        },
        {
          name: 'google.com',
          total: '',
          icon: 'fab fa-google-plus-square',
          percent:'',
          arrow: '',
        },
        {
          name: 'Shopify.com',
          total: '',
          icon: 'fas fa-shopping-cart',
          percent: '',
          arrow: '',
        },
        {
          name: 'Wordpress.com',
          total: '',
          icon: 'fab fa-wordpress',
          percent: '',
          arrow:'',
        },
      ]
      // websiteData: fakeData.websiteData,
      // productData: fakeData.productData,
    }
  },
  computed: {
    ...mapGetters({
      orderListLen: 'order/ListLen',
      //整理完的website data
      sortFacebook: 'order/sortFacebook',
      sortGoogle: 'order/sortGoogle',
      sortShopify: 'order/sortShopify',
      sortWordpress: 'order/sortWordpress',
    }),
    orderList() {
      return this.$store.state.order.orderList
    },
    totalRevenue() {
      return this.$store.state.order.orderList.reduce((accumulator, currentValue) => {
        return accumulator + Number(currentValue.totalPrice) 
      },0)
    },
    totalCost() {
      return 1000*this.orderListLen
    },
    latestOders() {
      let newary = this.productData.slice(0)
      return newary.sort((a, b) => {
        return b.datetime - a.datetime
      }).slice(0,3)
    },
  },
  methods: {
    setChartData() {
      console.log('setchart')
      this.chartOptions.series = []
      let chartSeriesIncome = []
      let chartSeriesCost = []
      let chartSeriesRevenue = []
      for (let i=0; i<this.orderListLen; i++) {
        let time = Date.parse(this.orderList[i].transactionTime)
        let Income = parseFloat(this.orderList[i].totalPrice)
        chartSeriesIncome.push([ time, Income ])
        chartSeriesCost.push([ time, 1000 ])
        chartSeriesRevenue.push([ time, Income-1000 ])
      }
      this.chartOptions.series.push({
        name: "Income",
        color: 'blue',
        data: chartSeriesIncome,
      },)
      this.chartOptions.series.push({
        name: "Cost",
        color: 'red',
        data: chartSeriesCost,
      },)
      this.chartOptions.series.push({
        name: "Revenue",
        color: 'green',
        data: chartSeriesRevenue,
      },)
    },
    setPercent(one, two) {
      return ((one - two)/ (two === 0 ? 1 : two)*100).toFixed(0)
    },
    setWebsiteData() {
      console.log('setwebsite')
      const reducer = (accumulator, currentValue) => accumulator + Number(currentValue);
      for (let i=0; i<this.view.length; i++) {
        switch(true) {
          case (this.view[i].name === 'Facebook.com'):
            this.view[i].total = this.sortFacebook.one.reduce(reducer,0)
            this.view[i].percent = this.setPercent(this.sortFacebook.one.reduce(reducer,0),this.sortFacebook.two.reduce(reducer,0))
            break;
          case (this.view[i].name ==='google.com'):
            this.view[i].total = this.sortGoogle.one.reduce(reducer,0)
            this.view[i].percent = this.setPercent(this.sortGoogle.one.reduce(reducer,0), this.sortGoogle.two.reduce(reducer,0))
            break;
          case (this.view[i].name === 'Shopify.com'):
            this.view[i].total = this.sortShopify.one.reduce(reducer,0)
            this.view[i].percent = this.setPercent(this.sortShopify.one.reduce(reducer,0),this.sortShopify.two.reduce(reducer,0));
            break;
          case (this.view[i].name === 'Wordpress.com'):
            this.view[i].total = this.sortWordpress.one.reduce(reducer,0)
            this.view[i].percent = this.setPercent(this.sortWordpress.one.reduce(reducer,0), this.sortWordpress.two.reduce(reducer,0));
            break;
        }
      }
    },
  },
  created() {
    console.log('created')
    this.$store.dispatch('order/init_OrderList')
  },
  mounted() {
    console.log('mounted')

  },
  updated() {
    console.log('updated')
    this.setChartData()
  },
  watch: {
    sortFacebook: 'setWebsiteData',
  }
}
</script>
<style lang="scss" scoped>
  .overview {
    padding-left: 15px;
    padding-right: 15px;
  }
  .row {
    margin: 15px 0 15px 0;
  }
  .first {
      text-align: center;
  }
  .box {
    //background-color: #faa;
    //border: 2px solid #000;
    .card {
      .card-body {
        .card-title {
          font-weight: bold;
        }
        .card-text {
          .product-info {
            color:#9B9B9B
          }
        }
        .Transaction {
          td {
            vertical-align: middle;
          }
        }
      }
    }
  }
</style>
