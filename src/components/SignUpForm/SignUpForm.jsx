import { Component } from "react";
import { signUp } from "../../utilities/users-service";

export default class SignUpForm extends Component {
  // Initialize state here in the component
  // State is always an object with a property for each "piece" of state
  // Form submission values have to match the state object values
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  // handleChange is also defined in the component
  // validated in the type
  // The object passed to setState is merged with the current state object
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  // handleSubmit also defined in the component
  handleSubmit = async (evt) => {
    evt.preventDefault();
    // alert(JSON.stringify(this.state));
    // We don't want to send the 'error' or 'confirm' property,
    // SPREAD/COPY CURRENT STATE, then delete ONE
    const formData = { ...this.state };
    delete formData.error;
    delete formData.confirm;

    // CREATE USER (resolves JWT payload, promise returned by signUp svc method)
    // SETS USER STATE WHEN LOGGED IN (displays NewOrders/History Routes)
    const user = await signUp(formData);
    // console.log(user);
    this.props.setUser(user);
    try {
    } catch (error) {}
    // with functional component, you need to use a spread operator before the
    this.setState({ error: `We couldn't sign you up! Try again.` });
    // GOOD TO ALWAYS PUT A CLG IN CATCH BLOCKS
    // console.log(err);
  };

  // setState is also defined in the component
  // setState accepts an object as an arg that merges with the existing state object
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <h4>Create Account</h4>
            <label>User</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
            <button type="submit" disabled={disable}>
              Sign up
            </button>
          </form>
        </div>
        {/* ERRORS DISPLAY IN A p tag */}
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}

/* 
Will use a class component just to use it and to see what they are
Functional components are newer and better. The main thing: they use Hooks.

Here, constructor or class are initializing the useState
Now updating state is different

DON'T use class components for your project. Use functional components.
*/
