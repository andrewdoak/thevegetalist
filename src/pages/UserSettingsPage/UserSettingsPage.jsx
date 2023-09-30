// import SignUpForm from "../../components/UserSettingsForm/UserSettingsForm";
// import LoginForm from "../../components/LogInForm/LogInForm";
import styles from "./UserSettingsPage.module.css";
// DEPENDENCIES
import { Link } from "react-router-dom";
// COMPONENTS
import LoginForm from "../../components/LogInForm/LogInForm";
import DeleteUserForm from "../../components/DeleteUserForm/DeleteUserForm";
import UpdateUserForm from "../../components/UpdateUserForm/UpdateUserForm";
// SERVICES
import { checkToken } from "../../utilities/users-service";

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
      {/* PAGE HEADING */}
      <h1 className={styles.h1}>Settings.</h1>

      {/* WELCOME PARAGRAPH */}
      <h4 className={styles.h4GrenadinePink}>{`A word...`}</h4>
      <p className={styles.pGrenadinePink}>
        {`Gentle gardener——aka ${props.user.name}——you have arrived at a page that gives you power.
        You know the saying, right? “With great power, comes great responsibility.” Use it (if you must),
        but please use it with caution and wisdom. The power to delete is absolute. And it's irreversible.`}
      </p>
      <p className={styles.p}>
        <Link
          className={styles.pLinkGreen}
          to="/gardens/current"
        >{`I'm scared...Take me home.`}</Link>
      </p>

      {/* UPDATE USERNAME */}
      <h4 className={styles.h4ExtraMargin}>{`Update Username`}</h4>
      <p className={styles.p}>
        OK, OK...this one is actually FUN! If you want to update your username,
        just type the new one in below. Don't forget to write it down, in case
        your login expires!
      </p>
      <p className={styles.pGrenadinePink}>{`Username. ${props.user.name}`}</p>
      {/* NEED TO SET STATE EVERY TIME */}
      <UpdateUserForm
        className={styles.UpdateForm}
        user={props.user}
        setUser={props.setUser}
      />

      {/* LOGIN EXPIRATION */}
      <h4 className={styles.h4}>{`Login Expiration`}</h4>
      <p className={styles.p}>
        {`Not dangerous, just useful. Click to check the expiration of your login.`}
      </p>
      <div className={styles.Button}>
        <button onClick={handleCheckToken}>CHECK LOGIN</button>
      </div>

      {/* DELETE ACCOUNT */}
      <h4 className={styles.h4ExtraMargin}>{`Delete Account`}</h4>
      <p className={styles.p}>Use the form below with EXTREME CAUTION.</p>
      <p className={styles.p}>
        When you provide your email and click on “Delete User,” we'll kill your
        account. Yes, that means all your plots and planning will also die.
        Hopefully your actual plants won't!
      </p>
      <p className={styles.p}>{`
      Final warning ${props.user.name}!`}</p>
      <p className={styles.pGrenadinePink}>{`Account. ${props.user.email}`}</p>
      {/* NEED TO SET STATE EVERY TIME */}
      <DeleteUserForm
        className={styles.UpdateForm}
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
