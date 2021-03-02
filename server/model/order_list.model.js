module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_list', {
    orderNumber: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "訂單編號"
    },
    orderStatus: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "狀態"
    },
    transactionWebsite: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "交易網站"
    },
    transactionTime: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "交易時間"
    },
    customer: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "客戶"
    },
    totalPrice: {
      type: DataTypes.DECIMAL(7,1),
      allowNull: true,
      comment: "總價"
    }
  }, {
    sequelize,
    tableName: 'order_list',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          
          { name: "orderNumber" },
        ]
      },
    ]
  });
};
