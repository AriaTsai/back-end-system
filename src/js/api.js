import axios from 'axios';
const url = 'http://localhost:8081'

// product_list 所有產品
const productListRequest = axios.create({
  baseURL: url + '/product_list/'
})

// orders 訂單明細
const ordersRequest = axios.create({
  baseURL: url + '/orders/'
})

// order_list 訂單
const orderListRequest = axios.create({
  baseURL: url + '/order_list/'
})




// product_list API
export const apiProductListAll = () => productListRequest.get('list')
export const apiProductListCreate = data => productListRequest.post('add', data)

// orders API
export const apiOrdersAll = () => ordersRequest.get('list')
//export const apiOrdersCreate = data => ordersRequest.get('add', data)

// order_list API
export const apiOrderListAll = () => orderListRequest.get('list')
export const apiOrderListCreate = data => orderListRequest.post('add', data)
