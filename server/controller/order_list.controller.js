const db = require('../config/db.config')
const order_list = db.order_list
const orders = db.orders

// 新增資料
exports.create = (req, res) => {
  //建立訂單
  order_list.create({
    orderNumber: req.body.orderNumber,
    orderStatus: req.body.orderStatus,
    transactionWebsite: req.body.transactionWebsite,
    transactionTime: req.body.transactionTime,
    customer: req.body.customer,
    totalPrice: req.body.totalPrice,
  }).then(order_list => {
    let msg = {
      code: 200,
      msg: '新增成功',
      id: order_list.id
    }
    res.status(200).json(msg)
  })
  .catch(error => {
    res.status(500).json(error)
    res.status(404).json(error)
  })
  //建立明細
  let idx = req.body.productlist.length
  for (let i=0; i<idx; i++) {
    orders.create({
      orderNumber: req.body.orderNumber,
      productNumber: req.body.productlist[i].productNumber,
      productName: req.body.productlist[i].productName,
      price: req.body.productlist[i].price,
      count: req.body.productlist[i].count,
      transactionWebsite: req.body.transactionWebsite,
      transactionTime: req.body.transactionTime,
      customer: req.body.customer,
    })
    .then(orders => {
      let msg = {
        code: 200,
        msg: '新增成功',
        id: orders.id
      }
      res.status(200).json(msg)
    })
    .catch(error => {
      res.status(500).json(error)
      res.status(404).json(error)
    })
  }
}
// 查詢所有清單
exports.findAll = (req, res) => {
  order_list.findAll()
    .then(order_list => {
      res.json(order_list);
    })
    .catch(err => {
      res.status(500).json('Error -> ' + err);
    });
}