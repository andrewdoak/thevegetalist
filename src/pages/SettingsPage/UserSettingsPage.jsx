// import SignUpForm from "../../components/UserSettingsForm/UserSettingsForm";
// import LoginForm from "../../components/LogInForm/LogInForm";
// import Link from "react-router-dom";

import styles from "./UserSettingsPage.module.css";
import LoginForm from "../../components/LogInForm/LogInForm";
import DeleteUserForm from "../../components/DeleteUserForm/DeleteUserForm";
import { checkToken } from "../../utilities/users-service";
import * as userService from "../../utilities/users-service";

function UserSettingsPage(props) {
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

  return (
    <div className={styles.UserSettingsPage}>
      <h1 className={styles.h1}>Settings.</h1>
      <h4 className={styles.h4}>{`A NOTE FOR ${props.user.name}`}</h4>
      <p className={styles.p}>
        {`Gentle gardener, you have arrived at a page that gives you power.
        As the saying goes: “with great power, comes great responsibility.” Use it, if you must,
        but please do so with caution and wisdom. The power of deletion is absolute...and irreversible.`}
      </p>
      <h4 className={styles.h4}>{`Check Login`}</h4>
      <p className={styles.p}>
        {`OK, OK, this first button isn't too dangerous. It just lets you check when your login
        expires.`}
      </p>
      <div className={styles.Button}>
        <button onClick={handleCheckToken}>Check Expiry</button>
      </div>
      <h4 className={styles.h4}>{`Delete ${props.user.name}`}</h4>
      <p className={styles.p}>
        Use the form below with EXTREME CAUTION. When you provide the email you
        signed up with then click the “Delete User” button, your account will be
        terminated. Yes, that means all your plots and planning.
      </p>
      <p className={styles.p}>{`
      The email we have on file for you is below...Final warning, ${props.user.name}.`}</p>
      <p className={styles.pGrenadinePink}>{`${props.user.email}`}</p>
      <DeleteUserForm
        className={styles.DeleteForm}
        user={props.user}
        setUser={props.setUser}
      />
    </div>
  );
}

export default UserSettingsPage;

/*
CAN TEST LOG IN FORM IN REACT DEV TOOLS AND FILLING OUT THE OBJECT FOR SIGN UP
*/
