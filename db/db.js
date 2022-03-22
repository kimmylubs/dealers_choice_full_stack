const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/dealers_choice_full_stack"
);

const Tea = sequelize.define("tea", {
  name: Sequelize.STRING,
});
const Topping = sequelize.define("topping", {
  name: Sequelize.STRING,
});
const Milk = sequelize.define("milk", {
  name: Sequelize.STRING,
});

const syncAndSeed = async () => {
  await sequelize.sync({ force: true });
  await Promise.all([
    Tea.create({ name: "Green" }),
    Tea.create({ name: "Black" }),
  ]),
    await Promise.all([
      Topping.create({ name: "Tapioca" }),
      Topping.create({ name: "Peach Jelly" }),
    ]),
    await Promise.all([
      Milk.create({ name: "Almond" }),
      Milk.create({ name: "Oat" }),
    ]);
};

module.exports = {
  syncAndSeed,
  models: {
    Tea,
    Topping,
    Milk,
  },
};
