import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LogInForm/LogInForm";

function AuthPage(props) {
  return (
    <main>
      <h1>Sign Up</h1>
      <SignUpForm setUser={props.setUser} />
      <LoginForm setUser={props.setUser} />
    </main>
  );
}

export default AuthPage;

/* 
CAN TEST LOG IN FORM IN REACT DEV TOOLS AND FILLING OUT THE OBJECT FOR SIGN UP
*/
