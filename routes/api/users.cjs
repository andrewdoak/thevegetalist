// import user from "../../models/user.cjs";

const express = require("express");
const router = express.Router();
// FUNCTION USED IN CONTROLLERS
const usersCtrl = require("../../controllers/api/users.cjs");
//
const ensureLoggedIn = require("../../config/ensureLoggedIn.cjs");

// REMEMBER INDUCES!
/* 
INDEX // router.get("/", 'your-model'Ctrl.function-fm-users-api);
NEW NOT USING
DELETE router.delete
UPDATE // router.put
CREATE router.post
EDIT NOT USING
SHOW // router.get("/:id", 'your-model'Ctrl.function-fm-users-api);
*/

// CREATE USER ROUTE
// /api/users
// APPENDS TO THE app.use path in the server (Back End)
router.post("/", usersCtrl.create);

// LOGIN ROUTE
// /api/users/login
router.post("/login", usersCtrl.login);

// DELETE ROUTE
router.delete("/", usersCtrl.deleteUser);

// UPDATE ROUTE
router.put("/", usersCtrl.updateUser);

// CONTROLLER ROUTE (runs Middleware)
// Protected route (ensureLoggedIn runs first, then checkToken)
// Both are Middleware
// Can check login in Postman (localhost:3001/api/users/check-token)
router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;

/*
REMEMBER: cjs for file extension, not js (common JS)

router.post
THIS WILL USE A METHOD FOR USERS CONTROLLER IN ANOTHER FILE
Not invoking, but giving the route the function

****
Abenezer got an error on this. 
Apparently it's not exported properly
He had module.export NOT module.exports


// SLIDES:
// https://ps-rtt-sei.herokuapp.com/15-week/mod-3/week-13/day-3/slides/
// https://ps-rtt-sei.herokuapp.com/15-week/mod-3/week-14/day-1/slides/
// https://ps-rtt-sei.herokuapp.com/15-week/mod-3/week-14/day-2/slides/
// REMEMBER, ANYTHING CREATE REACT APP, WE'RE DOING VITE
// SLIDES WON'T MATCH (NOTES BELOW AND IN SERVER.CJS)

// CODE ALONG:
// DAY 1
// https://pscohorts.slack.com/archives/C056A692JAX/p1694545078282019?thread_ts=1694545069.253979&cid=C056A692JAX
// DAY 2
// DAY 3
// DAY 4
// https://app.slack.com/client/T04411PBUN8/C056A692JAX/thread/C056A692JAX-1695052776.226929
*/
