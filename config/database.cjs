const mongoose = require("mongoose");

// MONGO DB CONNECTION
// First is the URL to Mongo Atlas
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.on("connected", function () {
  console.log(
    `(config/database.cjs) Your MongoDB Document "${db.name}" is connected at [Host:Port]: ${db.host}:${db.port}`
  );
});
db.on("disconnected", function () {
  console.log(`(config/database.cjs) Your MongoDB connection dropped`);
});

module.exports = db;

/* 
The clg pulls the jsx objects from Mongo
*/
