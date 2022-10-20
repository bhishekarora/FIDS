module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    ad :{

      type: Sequelize.STRING
    }
  });

  return User;
};
