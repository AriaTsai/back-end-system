
//  數據庫連接參數
const env = {
  database: 'back_end_system',
  username: 'root',
  password: 'xxxxx',
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
module.exports = env
