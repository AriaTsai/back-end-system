const env = require('./env.js')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

// 引入表模型
db.product_list = require('../model/product_list.model.js')(sequelize, Sequelize)
db.orders = require('../model/orders.model.js')(sequelize, Sequelize)
db.order_list = require('../model/order_list.model.js')(sequelize, Sequelize)

module.exports = db
