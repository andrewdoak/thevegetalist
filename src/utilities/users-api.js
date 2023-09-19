// USERS routes. Used frequently so make a variable.
// PROXY allows this. Redirects front end stuff to back end.
// This file makes the request to the back end.
const BASE_URL = "/api/users";

// SIGN UP
export async function signUp(userData) {
  const backendResponse = await fetch(BASE_URL, {
    method: "POST", // because creating a user
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  if (backendResponse.ok) {
    return backendResponse.json();
  } else {
    throw new Error(`Couldn't Sign-Up`);
  }
}

// LOG IN
export async function login(credentials) {
  const backendResponse = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (backendResponse.ok) {
    return backendResponse.json();
  } else {
    throw new Error(`Couldn't Login`);
  }
}
/* 
SLIDES
https://ps-rtt-sei.herokuapp.com/15-week/mod-3/week-14/day-2/slides/

CODE ALONG
https://app.slack.com/client/T04411PBUN8/C056A692JAX/thread/C056A692JAX-1695052776.226929

// USERS API
// =============
Handles request of login from Sign Up Form

// DAY 4"
// =============
// Putting AJAX request for login into a service module (not the SignUp form)
// Service module is anything that is not not an AJAX call but not a view
// We'll use it to make a token (maybe a util). Will call a try catch function. Then the Component will call that function.
// Of course, we'll have to import it.
// The point: separation of concerns.

// CODE WITH NOTES
// ===============
// USERS routes. Used frequently so make a variable.
// PROXY allows this. Redirects front end stuff to back end.
const BASE_URL = "/api/users";

export async function signUp(userData) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  const res = await fetch(BASE_URL, {
    method: "POST", // because creating a user
    headers: { "Content-Type": "application/json" },
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
    // like req.body
    // Sending object but if we send just strings it will need multiple requests
    body: JSON.stringify(userData),
  });
  // Check if request was successful
  // Res has an OK default property
  // (SLIDES) STEP 3: "it needs to be persisted"
  if (backendResponse.ok) {
    return backendResponse.json();
  } else {
    throw new Error(`Sign-Up Unsuccessful`);
  }
}

// BACKEND
// WILL go to back end to finish this request.
// Gets a 404 at first.
// Using Express router.
// Each main page will have its own route.

// routes>api (make the api folder)
*/
