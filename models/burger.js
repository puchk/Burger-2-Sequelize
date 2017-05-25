module.exports = function(sequelize, Sequelize) {
  var Burger = sequelize.define('Burger', {
    burger_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    devoured: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });
  return Burger;
};