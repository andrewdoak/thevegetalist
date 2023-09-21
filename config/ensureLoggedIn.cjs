// MIDDLEWARE checks for login.
// If unauthorized, JSON response
module.exports = function (req, res, next) {
  // Status code of 401 is Unauthorized
  if (!req.user) return res.status(401).json("User is not authorized");
  // A-OK, logged in, go to next
  next();
};

/* 
https://ps-rtt-sei.herokuapp.com/15-week/mod-3/week-14/day-2/slides/#3-implement-middleware-to-protect-server-side-routes
*/
