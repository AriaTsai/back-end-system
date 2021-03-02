const db = require('../config/db.config')
const orders = db.orders

// 新增資料
exports.create = (req, res) => {
  orders.create({
    orderNumber: req.body.orderNumber,
    productNumber: req.body.productNumber,
    productName: req.body.productName,
    price: req.body.price,
    count: req.body.count,
    transactionWebsite: req.body.transactionWebsite,
    transactionTime: req.body.transactionTime,
    customer: req.body.customer,
  }).then(orders => {
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

// 查詢所有清單
exports.findAll = (req, res) => {
  orders.findAll()
    .then(orders => {
      res.json(orders);
    })
    .catch(err => {
      res.status(500).json('Error -> ' + err);
    });
};
