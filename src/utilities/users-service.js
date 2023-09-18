import * as usersAPI from "./users-api";
// * GRABS ALL EXPORTS

// MULTIPLE EXPORTS?
// NO 'export default', JUST EXPORT

// SIGNUP: SETS STATE TO LOGGED IN, SEE NOTES (usersAPI is in the other svc file)
export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  return token;
}

/* 
SLIDES
https://ps-rtt-sei.herokuapp.com/15-week/mod-3/week-14/day-2/slides/

CODE ALONG
https://app.slack.com/client/T04411PBUN8/C056A692JAX/thread/C056A692JAX-1695052776.226929

// DAY 4
// =============
// Putting AJAX request for login into a service module (not the SignUp form)
// Service module is anything that is not not an AJAX call but not a view
// We'll use it to make a token (maybe a util). Will call a try catch function. Then the Component will call that function.
// Of course, we'll have to import it.
// The point: separation of concerns.

// DATA FLOW
// SignUpForm.jsx 
    // <--> users-service.js 
    // <--> users-api.js 
    // <-Internet-> 
    // server.js (Express)

// CODE
// MULTIPLE EXPORTS? NO DEFAULT, JUST EXPORT
export async function signUp(userData) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  const token = await usersAPI.signUp(userData);
  // Baby step by returning whatever is sent back by the server
  return token;
}


*/
