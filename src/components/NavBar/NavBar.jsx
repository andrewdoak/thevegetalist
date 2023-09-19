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
    <nav>
      <span>Hi, {props.user.name}!</span>
      &nbsp;&nbsp;
      <Link to="/orders">{`Order History`}</Link>
      {` 🍳 `}
      <Link to="/orders/new">{`New Order`}</Link>
      {` 🍳 `}
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}

export default NavBar;

/* 

Add Logged in user and 
log out link/button
*/
