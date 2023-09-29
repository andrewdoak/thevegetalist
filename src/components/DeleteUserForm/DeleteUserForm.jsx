// // LOGIN FORM
import styles from "./DeleteUserForm.module.css";
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

  // LOGOUT FUNCTION
  const handleLogOut = () => {
    // Delegate to the users-service
    usersService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  };

  // DELETE USER FUNCTION
  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // if (user.email === credentials.email) {}
      // alert(`${props.user.email}'s login deleted`);
      await usersService.deleteUser(credentials);

      handleLogOut();
    } catch (err) {
      setError("Delete error. Try again.");
      console.log(err);
    }
  }

  /* 
  const handleCheckToken = async () => {
    try {
      const expDate = await checkToken();
      // Have date methods from users-service
      alert(
        `${props.user.name}'s login expires on ` + expDate.toLocaleString()
      );
    } catch (err) {
      console.log(err);
    }
  };
  */

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
            className={styles.DeleteInput}
            type="text"
            name="email"
            // placeholder="sign up email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <button type="submit">DELETE USER</button>
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
