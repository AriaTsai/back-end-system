module.exports = function (app) {
  const order_list = require('../controller/order_list.controller')

  app.post('/order_list/add', order_list.create)

  app.get('/order_list/list', order_list.findAll)
}
