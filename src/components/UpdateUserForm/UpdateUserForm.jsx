// // UPDATE USER FORM
import styles from "./UpdateUserForm.module.css";
import { useState } from "react";
import * as usersService from "../../utilities/users-service";

export default function UpdateUserForm({ user, setUser }) {
  const [credentials, setCredentials] = useState({
    name: "",
    id: user._id,
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  // UPDATE USER FUNCTION
  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      console.log(credentials);
      const updatedUser = await usersService.updateUser(credentials);
      setUser(updatedUser);
    } catch (err) {
      setError("Update error. Try again.");
      console.log(err);
    }
  }

  return (
    <div>
      {/* SLIDES HAD onSubmit in the DIV. NEEDS TO BE ON THE FORM */}
      {/* className="form-container" */}
      <div>
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          // className={styles.InputID}
        >
          {/* <label>Email</label> */}
          <input
            className={styles.UpdateInput}
            type="text"
            name="name"
            // placeholder="name"
            value={credentials.name}
            onChange={handleChange}
            required
          />
          <button type="submit">UPDATE NAME</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}

// /*
// NOW using a FUNCTIONAL component (NOT CLASS LIKE SIGN UP)
// Functional components are newer and better. The main thing: they use Hooks.
// */
