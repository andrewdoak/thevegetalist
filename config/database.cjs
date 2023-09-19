const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`MongoDB Doc ${db.name} connected at ${db.host}:${db.port}`);
});
db.on("disconnected", function () {
  console.log(`MongoDB connection dropped`);
});

module.exports = db;

/* 
The clg pulls the jsx objects from Mongo
*/
