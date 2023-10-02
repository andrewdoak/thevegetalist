const express = require("express");
const router = express.Router();
// FUNCTION USED IN CONTROLLERS
const vegetablesCtrl = require("../../controllers/api/vegetables.cjs");
// FUNCTION USED IN CONFIG
// const ensureLoggedIn = require("../../config/ensureLoggedIn.cjs");

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

// 1. Index - GET endpoint
// /api/vegetables
router.get("/", vegetablesCtrl.vegetableIndex);

// 2. New - POST endpoint
// /api/vegetables
router.post("/", vegetablesCtrl.addNewVegetable);

module.exports = router;
/* 
// 5. "C" CREATE ROUTE
// TODO: (IS THIS OUT OF ORDER?)
// /api/vegetables
// APPENDS TO THE app.use path in the server (Back End)
// router.post("/", vegetablesCtrl.createVegetable);

// 3. "D" DELETE ROUTE
// router.delete("/", vegetablesCtrl.deleteVegetable);

// 4. "U" UPDATE ROUTE
// router.put("/", vegetablesCtrl.updateVegetable);

// TODO: Do I need this?
// CONTROLLER ROUTE (runs Middleware)
// Protected route (ensureLoggedIn runs first, then checkToken)
// Both are Middleware
// Can check login in Postman (localhost:3001/api/users/check-token)
// router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);
*/

/*
REMEMBER: cjs for file extension, not js (common JS)

router.post
THIS WILL USE A METHOD FOR USERS CONTROLLER IN ANOTHER FILE
Not invoking, but giving the route the function


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
