require("dotenv").config();
require("./database.cjs");
const Vegetable = require("../models/vegetable.cjs");
const seedVegData = require("./seedVegData.json");

(async function () {
  // This deleteMany makes sure your db doesn't get seeded over and over again with a bunch of duplicate seed data.
  await Vegetable.deleteMany({});
  // Create function takes an object or an array of objects (the JSON is an array of objects)
  const vegetable = await Vegetable.create(seedVegData);

  console.log(vegetable);

  process.exit();
})();

/* 
Sample seed data from Mockaroo
https://www.mockaroo.com/
*/
