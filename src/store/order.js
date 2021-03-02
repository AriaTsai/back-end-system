import { apiOrderListAll } from '@/js/api.js'

const days = {
  last30days : Date.parse(new Date()) - 86400000*30,
  last60days : Date.parse(new Date()) - 86400000*30*2
}
const dayFilter = {
  oneMonth(list) {
    return list.filter(item => {
      return Date.parse(item.transactionTime) > days.last30days
    })
  },
  twoMonth(list) {
    return list.filter(item => {
      return days.last30days > Date.parse(item.transactionTime)
        &&  Date.parse(item.transactionTime) > days.last60days
    })
  },
}
const websiteFilter = {
  FB(list) {
    return list.filter(item => {
      return item.transactionWebsite === 'Facebook.com'
    })
  },
  google(list) {
    return list.filter(item => {
      return item.transactionWebsite === 'google.com'
    })
  },
  shopify(list) {
    return list.filter(item => {
      return item.transactionWebsite === 'Shopify.com'
    })
  },
  wordpress(list) {
    return list.filter(item => {
      return item.transactionWebsite === 'Wordpress.com'
    })
  }
}

const orderModules = {
  namespaced: true,
  state: {
    orderList:[],
  },
  getters: {
    List: state => {
      return state.orderList
    },
    ListLen: state => {
      return state.orderList.length
    },
    sortFacebook(state) {
      return {
        one: dayFilter['oneMonth'](websiteFilter['FB'](state.orderList)).map(item => { return item.totalPrice }),
        two: dayFilter['twoMonth'](websiteFilter['FB'](state.orderList)).map(item => { return item.totalPrice })
      }
    },
    sortGoogle(state) {
      return {
        one: dayFilter['oneMonth'](websiteFilter['google'](state.orderList)).map(item => { return item.totalPrice }),
        two: dayFilter['twoMonth'](websiteFilter['google'](state.orderList)).map(item => { return item.totalPrice })
      }
    },
    sortShopify(state) {
      return {
        one: dayFilter['oneMonth'](websiteFilter['shopify'](state.orderList)).map(item => { return item.totalPrice }),
        two: dayFilter['twoMonth'](websiteFilter['shopify'](state.orderList)).map(item => { return item.totalPrice })
      }
    },
    sortWordpress(state) {
      return {
        one: dayFilter['oneMonth'](websiteFilter['wordpress'](state.orderList)).map(item => { return item.totalPrice }),
        two: dayFilter['twoMonth'](websiteFilter['wordpress'](state.orderList)).map(item => { return item.totalPrice })
      }
    },
  },
  mutations: {
    setOrderList(state, data) {
      state.orderList = data
    }
  },
  actions: {
    //讀取order訂單
    init_OrderList({ commit }) {
      apiOrderListAll()
        .then(res => {
          commit('setOrderList', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
  }
}
export default orderModules