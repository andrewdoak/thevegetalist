//users-service.js
import * as usersAPI from "./users-api";

// signUp
export async function signUp(userData) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  // This is the frontend receiving the response from the backend (token) and persist (STEP 3)
  const token = await usersAPI.signUp(userData);
  // Persist the token
  localStorage.setItem("token", token);

  // RETURN THIS FROM THE SIGNUP FORM
  return getUser();
}

// NEW FUNCTIONS (getToken, getUser, login)
// LOGIN FUNCTION
export async function login(credentials) {
  const token = await usersAPI.login(credentials);
  // PERSIST TOKEN
  localStorage.setItem("token", token);
  return getUser();
}

// FUNCTION delete
// Need a remove function in here
// Need a remove function in both users-service and users-api
export async function deleteUser(credentials) {
  await usersAPI.deleteUser(credentials);
}

// FUNCTION getToken
export function getToken() {
  // getItem returns null if there's no string
  const token = localStorage.getItem("token");
  if (!token) return null;
  // Obtain the payload of the token (like we did on the back end)
  // Need to PARSE the stringified to get an object
  const payload = JSON.parse(atob(token.split(".")[1]));
  // A JWT's exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    // Token has expired - remove it from localStorage
    localStorage.removeItem("token");
    return null;
  }
  return token;
}
// If you get through both conditionals, the token is valid
// So we can return the token

// FUNCTION getUser
// User is in the payload of the TOKEN
// DRY use the code we just wrote
export function getUser() {
  const token = getToken();
  // IF TOKEN, RETURN user in the payload, ELSE return null
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

// LOGOUT function
export function logOut() {
  localStorage.removeItem("token");
}

// Used in OrderHistory
// https://ps-rtt-sei.herokuapp.com/15-week/mod-3/week-14/day-2/slides/#add-the-checktoken-service-function
export function checkToken() {
  // Just so that you don't forget how to use .then
  return (
    usersAPI
      .checkToken()
      // checkToken returns a string, but let's
      // make it a Date object for more flexibility (date methods like from flights)
      .then((dateStr) => new Date(dateStr))
  );
}

/* 
SLIDES
https://ps-rtt-sei.herokuapp.com/15-week/mod-3/week-14/day-2/slides/

CODE ALONG
Day 4
https://app.slack.com/client/T04411PBUN8/C056A692JAX/thread/C056A692JAX-1695052776.226929

Day 5
https://pscohorts.slack.com/archives/C056A692JAX/p1695306881272789

// DAY 4
// =============
// Updated from SLACK but didn't really talk about it.
// Update user State from the payload we saved in the user logs in or out (in App.jsx)


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
