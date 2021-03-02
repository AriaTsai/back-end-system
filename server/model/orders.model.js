module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "odersID"
    },
    orderNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "數量"
    },
    transactionWebsite: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    transactionTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "交易時間"
    },
    customer: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "客戶"
    }
  }, {
    sequelize,
    tableName: 'orders',
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
