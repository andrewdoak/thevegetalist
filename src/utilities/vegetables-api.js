import { getToken } from "./users-service";
const BASE_URL = "/api/vegetables";

// 1. Index - SHOW VEGETABLE
export async function showVegetables() {
  return sendRequest(BASE_URL);
}

/*--- HELPER FUNCTION sendRequest---*/
// getToken from users-service.js
async function sendRequest(url, method = "GET", payload = null) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  // Should see Bearer Authorization and token in the Headers tab of Network Inspector
  const options = { method };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }
  // REFACTOR to check for valid token (Below options, above fetch)
  // Can be token or null (USE CONDITIONAL)
  const token = getToken();
  if (token) {
    // Ensure the headers object exists
    options.headers = options.headers || {};
    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }

  const backendResponse = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (backendResponse.ok) return backendResponse.json();
  throw new Error("Bad Request");
}
