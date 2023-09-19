// Connect to the database
require("dotenv").config();
const db = require("./config/database.cjs");

// Require the Mongoose models
// const User = require('./models/user');
// const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, item, category, order;
let users, items, categories, orders;

setTimeout(() => {
  db.close();
}, 5000);

/* 
JOSH USED THIS WHEN WE CREATED THE BCRYPT IN users/model
Commented out setTimeout

To use it. A new terminal.
type node
then .load crud-helper.cjs

FOLLOW NOTES at "Feel free sit back and observe..."
*/
