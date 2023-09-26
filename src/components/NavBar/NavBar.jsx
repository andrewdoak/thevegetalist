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
      <Link to="/gardens/current">{`Current`}</Link>
      &nbsp;&nbsp;
      <Link to="/gardens">{`Archive`}</Link>
      &nbsp;&nbsp;
      <Link to="/gardens/new">{`+ New`}</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.DuskyGreen}>{props.user.name}'s Garden</span>
      &nbsp;&nbsp;
      <Link to="" onClick={handleLogOut} className={styles.GrenadinePink}>
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
