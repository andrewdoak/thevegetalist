import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LogInForm/LogInForm";
// import Link from "react-router-dom";

function AuthPage(props) {
  return (
    <main>
      <h1>Garden Planner Login</h1>
      <LoginForm setUser={props.setUser} />
      <SignUpForm setUser={props.setUser} />
    </main>
  );
}

export default AuthPage;

/* 
CAN TEST LOG IN FORM IN REACT DEV TOOLS AND FILLING OUT THE OBJECT FOR SIGN UP
*/
