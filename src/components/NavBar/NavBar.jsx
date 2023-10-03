// CSS IMPORT
import styles from "./NavBar.module.css";
// LINK IMPORT
import { Link } from "react-router-dom";
// IMPORT EVERYTHING FROM USER SVC (*)
import * as userService from "../../utilities/users-service";

function NavBar(props) {
  // LOGOUT event handler
  // Josh did an arrow function (doesn't match slides)
  // PASS the prop in App
  // Logout event happens in users-service
  const handleLogOut = () => {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  };

  return (
    <nav className={styles.NavBar}>
      <span className={styles.NavTitle}>The Vegetalist.</span>
      &nbsp;
      {/* ABOUT */}
      <Link to="" target="#" className={styles.Logout}>
        About
      </Link>
      {/* USERNAME AFTER SITE TITLE */}
      {/* &nbsp;
      <span className={styles.LoginName}>{props.user.name}'s Garden</span> */}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/gardens/current">{props.user.name}'s Plot</Link>
      &nbsp;&nbsp;
      {/* ADD/DELETE VEGETABLE */}
      <Link to="/vegetable/add-delete">{`Add/Delete Veg`}</Link>
      &nbsp;&nbsp;
      {/* NEW GARDEN (NOT USING) */}
      {/* <Link to="/gardens/new">{`+ New +`}</Link> */}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {/* SETTINGS */}
      <Link to="/settings" className={styles.Logout}>
        Settings
      </Link>
      &nbsp;&nbsp;
      {/* LOGOUT */}
      <Link to="" onClick={handleLogOut} className={styles.Logout}>
        Logout
      </Link>
    </nav>
  );
}

export default NavBar;

/* 

Add Logged in user and 
log out link/button
*/
