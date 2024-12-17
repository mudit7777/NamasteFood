import React from "react";
class UserClass extends React.Component {
  // how do we pass props in the class based component
  constructor(props) {
    super(props);
    console.log(props);

    // defining state
    this.state = {
      count: 1,
      count2: 10,
    };
  }
  render() {
    // initialise the props
    const { name, location, contact } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            // NEVER UPDATE STATE VARIBALE DIRECTLY
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase{" "}
        </button>
        <h1>Count : {count2}</h1>
        <button
          onClick={() => {
            // NEVER UPDATE STATE VARIBALE DIRECTLY
            this.setState({
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count Increase Second{" "}
        </button>
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
        <h2>Contact : {contact}</h2>
      </div>
    );
  }
}

export default UserClass;
