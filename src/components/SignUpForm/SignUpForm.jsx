import { Component } from "react";

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
  handleSubmit = (evt) => {
    evt.preventDefault();
    alert(JSON.stringify(this.state));
  };

  // setState is also defined in the component
  // setState accepts an object as an arg that merges with the existing state object
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className="form-container">
        <div>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
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
            <label>Confirm</label>
            <input
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
            <button type="submit" disabled={disable}>
              SIGN UP
            </button>
          </form>
        </div>
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
