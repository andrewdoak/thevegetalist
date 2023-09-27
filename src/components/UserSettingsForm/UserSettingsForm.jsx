// // LOGIN FORM
import { useState } from "react";
import * as usersService from "../../utilities/users-service";

export default function DeleteForm({ user, setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  const handleLogOut = () => {
    // Delegate to the users-service
    usersService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  };

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      //if (user.email === credentials.email) {}
      await usersService.deleteUser(credentials);
      handleLogOut();
    } catch (err) {
      setError("Delete error. Try again.");
      console.log(err);
    }
  }

  return (
    <div>
      {/* SLIDES HAD onSubmit in the DIV. NEEDS TO BE ON THE FORM */}
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <button type="submit">Delete User</button>
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
