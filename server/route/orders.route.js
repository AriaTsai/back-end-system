module.exports = function (app) {
  const orders = require('../controller/orders.controller')

  app.post('/orders/add', orders.create)

  app.get('/orders/list', orders.findAll)
}
