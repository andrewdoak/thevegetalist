require("dotenv").config();
require("./database.cjs");
const seedVegData = require("./seedVegData.json");
const Vegetable = require("../models/vegetable.cjs");

(async function () {
  await Vegetable.deleteMany({});
  // Create function takes an object or an array of objects (the JSON is an array of objects)
  const vegetable = await Vegetable.create(seedVegData);

  console.log(vegetable);

  process.exit();
})();
