module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_list', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "productID"
    },
    productNumber: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "產品編號"
    },
    productName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "產品名稱"
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "價格"
    },
    inventory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "庫存"
    },
    color: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "顏色"
    },
    remark: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "產品備註"
    },
    image: {
      type:  DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'product_list',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
