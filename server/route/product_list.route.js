module.exports = function (app) {
  const product_list = require('../controller/product_list.controller')

  app.post('/product_list/add', product_list.create)

  app.get('/product_list/list', product_list.findAll)
}
