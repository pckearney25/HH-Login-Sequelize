module.exports = function(sequelize, DataTypes) {
  var Organization = sequelize.define("organizations", {
    organizer: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    phone_number: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  });
  return Organization;
};
