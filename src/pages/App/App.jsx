// CSS
import "./App.css";
// REACT IMPORTS
import { useState } from "react";
// ROUTER (destructured)
import { Routes, Route } from "react-router-dom";
// PAGES
import AuthPage from "../AuthPage/AuthPage";
import NewPlotPage from "../NewPlotPage/NewPlotPage";
import CurrentPlotPage from "../CurrentPlotPage/CurrentPlotPage";
import PlotArchivePage from "../PlotArchivePage/PlotArchivePage";
// COMPONENTS
import NavBar from "../../components/NavBar/NavBar";
// SERVICES
import { getUser } from "../../utilities/users-service";
// returns User or Null when updating state
// fire it in user useState (formerly null)

// APP
export default function App() {
  // set User useState. Null is initial state value.
  // Setter function named according to a convention
  // Auth will show up at first if userState is null
  // Empty object was used for testing to show other pages
  // All connected to the ternary below
  const [user, setUser] = useState(getUser);
  return (
    <main className="App">
      {user ? (
        // If we didn't want it to only show when logged in, you'd put it above the {user} ternary
        // Need a react fragment to render multiple top-level components in a return
        <>
          {/* user & setUser (from NavBar) passed as props */}
          {/* need to use them also on auth page & user-service */}
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/gardens/new" element={<NewPlotPage />} />
            <Route path="/gardens/current" element={<CurrentPlotPage />} />
            <Route path="/gardens" element={<PlotArchivePage />} />
            {/* CATCH ALL */}
            {/* <Route path="*" element={<Navigate to="/orders/new" />} /> */}
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

// GITHUB:
// https://github.com/andrewdoak/garden-planner

// SLIDES:
// https://ps-rtt-sei.herokuapp.com/15-week/mod-3/week-13/day-3/slides/
// https://ps-rtt-sei.herokuapp.com/15-week/mod-3/week-14/day-1/slides/
// https://ps-rtt-sei.herokuapp.com/15-week/mod-3/week-14/day-2/slides/
// REMEMBER, ANYTHING CREATE REACT APP, WE'RE DOING VITE (cjs)
// SLIDES WON'T MATCH (NOTES BELOW AND IN SERVER.CJS)

// CODE ALONG:
// DAY 1
// https://pscohorts.slack.com/archives/C056A692JAX/p1694545078282019?thread_ts=1694545069.253979&cid=C056A692JAX
// DAY 2
// DAY 3
// DAY 4
// https://app.slack.com/client/T04411PBUN8/C056A692JAX/thread/C056A692JAX-1695052776.226929
// DAY 5
// https://pscohorts.slack.com/archives/C056A692JAX/p1695306881272789

// GITHUB REPO:
// https://github.com/andrewdoak/sei-mern-cafe

// DAY 4
// =============
// NOTE: copy notes from utils/users-api

// Once login works, display it in the NavBar.
// (CLEARED LOCAL STORAGE) localStorage.clear()
// Create a new user

// Go to NavBar

// Putting AJAX request for login into a service module (not the SignUp form)
// Service module is anything that is not not an AJAX call but not a view
// We'll use it to make a token (maybe a util). Will call a try catch function. Then the Component will call that function.
// Of course, we'll have to import it.
// The point: separation of concerns.

// DAY 3
// =============
// Create a CRUD-HELPER to test your models
// touch crud-helper.cjs

// Helps with playing with DB without hitting Express (a bit like console logging or inspecting)
// Can use it to connect
// Run by node crud-helper.cjs
// Don't run with nodemon because nodemon uses Mongoose and you should only run that once

// LOTS OF TODAY WILL BE AUTHENTICATION
// THIS WILL BE FRONT-END

// INCORPORATES USER STORIES
// Implies atomic actions and needs behind those actions
// Here, we need to create a form that communicates with the back end

// DAY 2
// =============
// Watch out using && for conditional rendering (only if you're mapping and don't want it to be empty)
// Better to use ternary

// REACT ROUTER
// Make sure you specify v6 if you're looking up Router stuff.
// Breaking changes vs. v5

// ROUTER WRAPS ALL THE PAGES EXCEPT AUTH PAGE
// Path needs that / (don't forget)
// Page gets rendered/referenced line a component
// element={<NewOrderPage />}
// So that we can pass props

// return (
//   <div className="App">
//     {user ? (
//       <Routes>
//         <Route path="/orders/new" element={<NewOrderPage />} />
//       </Routes>
//     ) : (
//       <AuthPage />
//     )}
//   </div>
// );
// }

// CHANGE USE STATE FROM NULL TO EMPTY OBJECT
// const [user, setUser] = useState({});
// You'll see nothing on the page
// But if you to to
// http://localhost:5173/orders/new
// You'll see New Order Page

// DAY 1
// =============
// NOTA BENE:
// If you change package.json
// OR
// .env
// RESTART YOUR SERVER

// BACK END SCAFFOLD
// Goes after scaffolding Vite React App
// Backend goes outside /src file
// Frontend goes in /src

// VITE BUILD
// When it runs, it goes to a /dist folder, not the /build for create-react-app
// Can see th
// npm run build
// (This runs vite build script from package.json)

// EXPRESS BUILD
// We're gonna code this from scratch
// Not much Middleware

// npm i express
// npm i morgan
//   Morgan is a logging library
// npm i serve-favicon

// CAN CHAIN THESE
// npm i express morgan serve-favicon

// NO JSX TEMPLATES NEEDED: REACT IS SERVING VIEWS

// You can confirm that they worked by checking package.json that those dependencies are in there

// SERVER
// touch server.cjs
// (common js file extension)
// Has to do with Vite reading/compiling the JS and error handling

// IMPORTS
// const express = require("express");
// // Core Node Module
// const path = require("path");
// // Other Dependencies (we just downloaded)
// const favicon = require("serve-favicon");
// const logger = require("morgan");

// PROXY TO FIX AJAX CALLS FROM REACT TO BACK END (3001)
// NOT SAME as slides (package.json)
// vite.config.js

// USE THIS CODE:
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   // THIS REDIRECTS AJAX REQUESTS FROM REACT TO BACK END
//   // THEY'RE RUNNING ON DIFFERENT PORTS. HENCE PROXY
//   server: {
//     proxy: {
//       "/api": {
//         target: "http://localhost:3001",
//         changeOrigin: true,
//         secure: false,
//       },
//     },
//   },
// });
