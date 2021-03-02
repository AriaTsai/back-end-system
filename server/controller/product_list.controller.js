const db = require('../config/db.config')
const product_list = db.product_list

// 新增資料
exports.create = (req, res) => {
  product_list.create({
    productNumber: req.body.productNumber,
    productName: req.body.productName,
    price: req.body.price,
    inventory: req.body.inventory,
    color: req.body.color,
    remark: req.body.remark,
    image: req.body.productImg,
  }).then(product_list => {
    let msg = {
      code: 200,
      msg: '新增成功',
      id: product_list.id
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
  product_list.findAll()
    .then(book => {
      console.log(book)
      res.json(book);
    })
    .catch(err => {
      res.status(500).json('Error -> ' + err);
    });
};
