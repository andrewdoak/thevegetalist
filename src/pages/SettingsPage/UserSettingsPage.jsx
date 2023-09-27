// import SignUpForm from "../../components/UserSettingsForm/UserSettingsForm";
// import LoginForm from "../../components/LogInForm/LogInForm";
// import Link from "react-router-dom";

import styles from "./UserSettingsPage.module.css";
import LoginForm from "../../components/LogInForm/LogInForm";
import UserSettingsForm from "../../components/UserSettingsForm/UserSettingsForm";
import { checkToken } from "../../utilities/users-service";
import * as userService from "../../utilities/users-service";

function UserSettingsPage(props) {
  // const handleCheckToken = async () => {
  //   try {
  //     const expDate = await checkToken();
  //     // Have date methods from users-service
  //     alert(`Your login expires on ` + expDate.toLocaleString());
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className={styles.UserSettingsPage}>
      <h1 className={styles.h1}>Settings.</h1>
      <p className={styles.p}>
        This page will allow users to update their login or delete their
        account.
      </p>
      <main>
        <h4>Delete User</h4>
        <UserSettingsForm user={props.user} setUser={props.setUser} />
        {/* <button onClick={handleCheckToken}>Login Expiry</button> */}
      </main>
    </div>
  );
}

export default UserSettingsPage;

// /*
// function PlotArchivePage() {
//   const handleCheckToken = async () => {
//     try {
//       const expDate = await checkToken();
//       // Have date methods from users-service
//       alert(`Your login expires on ` + expDate.toLocaleString());
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div>
//       <h1>Archive</h1>
//       <button onClick={handleCheckToken}>Check login</button>
//     </div>
//   );
// }

// export default PlotArchivePage;
// */

// // AUTH PAGE OG FUNCTION
// /*
// function AuthPage(props) {
//   return (
//     <main>
//       <h1>User Settings Page</h1>
//       <LoginForm setUser={props.setUser} />
//       <SignUpForm setUser={props.setUser} />
//     </main>
//   );
// }

// export default AuthPage;
// */

// /*
// CAN TEST LOG IN FORM IN REACT DEV TOOLS AND FILLING OUT THE OBJECT FOR SIGN UP
// */
