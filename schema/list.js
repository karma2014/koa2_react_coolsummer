/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('list', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: ''
    },
    complate: {
      type: DataTypes.INTEGER(1).UNSIGNED.ZEROFILL,
      allowNull: true
    }
  }, {
    tableName: 'list'
  });
};
