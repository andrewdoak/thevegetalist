const jwt = require("jsonwebtoken");

// ANONYMOUS function, but exported as checkToken.cjs
// Runs for every request
// Provides user information WHEN logged in to provide user information
// To do operations
module.exports = function (req, res, next) {
  // Gets value of Auth header. Also checks query
  let token = req.get("Authorization") || req.query.token;

  if (token) {
    // Remove the 'Bearer ' if it was included in the token header
    // Once it's sent and received, it's not needed anymore (DELETE)
    token = token.replace("Bearer ", "");
    // Check if token is valid and not expired
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
      // If valid token, decoded will be the token's entire payload
      // If invalid token, err will be set
      // Backend decodes, so we don't need atob() or btoa()
      req.user = err ? null : decoded.user;
      // If your app cares... (optional)
      // Date in ms converted to seconds
      req.exp = err ? null : new Date(decoded.exp * 1000);
      return next();
    });
    // If no token sent, next function sends to the controller (next function in line)
  } else {
    req.user = null;
    return next();
  }
};

/* 
SLIDES BOOKMARK
https://ps-rtt-sei.herokuapp.com/15-week/mod-3/week-14/day-2/slides/#add-the-checktoken-middleware-to-serverjs

YES, lots of checkTokens (front end users-api and users-service on FRONTEND)
NOW the middleware in config/checkToken.cjs
There will also be a route on the server
Expiration of token, 24h in CreateJWT in the Controllers (BACKEND)

CODE
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  // Check for the token being sent in a header or as a query parameter
  let token = req.get('Authorization') || req.query.token;
  if (token) {
    // Remove the 'Bearer ' if it was included in the token header
    token = token.replace('Bearer ', '');
    // Check if token is valid and not expired
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      // If valid token, decoded will be the token's entire payload
      // If invalid token, err will be set
      req.user = err ? null : decoded.user;  
      // If your app cares... (optional)
      req.exp = err ? null : new Date(decoded.exp * 1000);  
      return next();
    });
  } else {
    // No token was sent
    req.user = null;
    return next();
  }
};
*/
