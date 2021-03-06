module.exports = function(sequelize, DataTypes) {
  var Volunteer = sequelize.define("volunteers", {
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    phone_num: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  });
  return Volunteer;
};
