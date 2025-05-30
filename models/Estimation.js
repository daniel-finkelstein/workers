// models/Estimation.js
module.exports = (sequelize, DataTypes) => {
  const Estimation = sequelize.define('Estimation', {
    userId: DataTypes.STRING,
    requestId: DataTypes.STRING,
    result: DataTypes.JSONB,  // guarda el array con symbol, nextPrice, expectedProfit
    total: DataTypes.FLOAT,
    timestamp: DataTypes.DATE
  });
  return Estimation;
};
