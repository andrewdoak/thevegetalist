// USER CONTROLLER

// MULTIPLE CONTROLLERS, ONE FILE
// THAT MEANS WE NEED OBJECTS
const User = require("../../models/user.cjs");
const jwt = require("jsonwebtoken");
module.exports = {
  create,
};

// CREATE USER FUNCTION
// TAKES req, res BECAUSE IT'S A CONTROLLER FUNCTION
// Like router.get or app.get
async function create(req, res) {
  try {
    // CREATE user and add to DB
    const user = await User.create(req.body);
    // TOKEN will be a string
    const token = createJWT(user);
    // Yes, we can use res.json to send back just a string
    // The client code needs to take this into consideration
    res.json(token);
  } catch (err) {
    // Client will check for non-2xx status code
    // 400 = Bad Request
    res.status(400).json(err);
  }
}

// HELPER FUNCTION to create JWT (NOTES BELOW)
function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}

// This is also HOISTING from way back

/* 
SLIDES DAY 5
"Add the User to the Database"

CODE ALONG: DAY 5
https://pscohorts.slack.com/archives/C056A692JAX/p1695136396082119

Require user model at top
Require jsonwebtoken package
npm i jsonwebtoken

CREATE USER NOTES
// CREATE USER FUNCTION
// TAKES req, res BECAUSE IT'S A CONTROLLER FUNCTION
// Like router.get or app.get

async function create(req, res) {
  try {
    // CREATE user and add to DB
    const user = await User.create(req.body);
    // TOKEN will be a string
    const token = createJWT(user);
    // Yes, we can use res.json to send back just a string
    // The client code needs to take this into consideration
    res.json(token);
  } catch (err) {
    // Client will check for non-2xx status code
    // 400 = Bad Request
    res.status(400).json(err);
  }
}

CREATE JWT (HELPER) NOTES
function createJWT(user) {
  return jwt.sign(
    // DATA PAYLOAD
    { user },
    process.env.SECRET,
    // OPTIONS OBJECT (needs h for HOUR, otherwise ms)
    { expiresIn: "24h" }
  );
}

*/
