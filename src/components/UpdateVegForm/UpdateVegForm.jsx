import { useState } from "react";
import styles from "./UpdateVegDetail.module.css";
// import * as usersService from "../../utilities/users-service";

export default function UpdateVegForm({ setVegetable }) {
  const [vegetable, setVegetable] = useState({
    type: "",
    variety: "",
    img: "",
    perSF: "",
    seedStarted: "",
    seedGerminated: "",
    daysToHarvest: "",
    link: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setVegetable({ ...vegetable, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const createdVegetable = await vegetableService.create(vegetable);
      setVegetable(createdVegetable);
    } catch {
      setError("Could not create your vegetable. Try again.");
    }
  }
  /* 
  type: "tomato",
  variety: "atomic purple",
  img: "imgURL",
  perSF: "1",
  seedStarted: "5/31/23",
  seedGerminated: "6/6/23",
  daysToHarvest: "75",
  link: "vegURL",
  */
  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h4>Add Vegetable</h4>
          {/* VEGETABLE TYPE */}
          <label>Type</label>
          <input
            type="text"
            name="type"
            value={vegetable.type}
            onChange={handleChange}
            required
          />
          {/* VEGETABLE VARIETY */}
          <label>Variety</label>
          <input
            type="text"
            name="variety"
            value={vegetable.variety}
            onChange={handleChange}
            required
          />
          {/* VEGETABLE IMAGE */}
          <label>Image</label>
          <input
            type="text"
            name="img"
            value={vegetable.img}
            onChange={handleChange}
            required
          />
          {/* VEGETABLES PER/SF */}
          <label>Plants Per S.F.</label>
          {/* TODO: Check if the required etc. are right. */}
          <select name="perSF" onChange={handleChange} required>
            <option value="1">1</option>
            <option value="4">4</option>
            <option value="9">9</option>
            <option value="16">16</option>
          </select>
          {/* SEED STARTED */}
          <label>Started</label>
          <input
            type="datetime-local"
            name="seedStarted"
            value={vegetable.seedStarted}
            onChange={handleChange}
            required
          />
          {/* SEED GERMINATED */}
          <label>Germinated</label>
          <input
            type="datetime-local"
            name="seedGerminated"
            value={vegetable.seedGerminated}
            onChange={handleChange}
            required
          />
          {/* DAYS TO HARVEST */}
          {/* TODO: is this text or a number? */}
          <label>Maturation</label>
          <input
            type="number"
            name="daysToHarvest"
            value={vegetable.daysToHarvest}
            onChange={handleChange}
            required
          />
          {/* LINK TO DETAIL */}
          <label>Link</label>
          <input
            type="text"
            name="link"
            value={vegetable.link}
            onChange={handleChange}
            required
          />

          <button type="submit">Add Vegetable</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}

/*
// LOGIN FORM
export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Could not log you in. Try again.");
    }
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h4>Login</h4>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}

/* 
NOW using a FUNCTIONAL component (NOT CLASS LIKE SIGN UP)
Functional components are newer and better. The main thing: they use Hooks.
*/
