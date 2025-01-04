import React from "react";
import { Component } from "react";
class UserClass extends Component {
  // how do we pass props in the class based component
  constructor(props) {
    super(props);
    console.log(this.props.name + "Child Constructor");

    // defining state
    this.state = {
      userInfo: {
        name: "Dummy",
        blog: "",
        avatar_url: "Default.com",
      },
    };
  }

  async componentDidMount() {
    console.log("Child Component Did Mount ");
    // API Call
    const data = await fetch("https://api.github.com/users/mudit7777");
    const json = await data.json();

    this.timer = setInterval(() => {
      console.log("timer calling ");
    }, 1000);

    // set State
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component Will Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);

    console.log("Component Will Unmount");
  }

  render() {
    const { name, blog, avatar_url, login } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name : {name}</h2>
        <h2>Blog : {blog}</h2>
        <h2>Login : {login} </h2>
      </div>
    );
  }
}

export default UserClass;

/**
 * Parent Constructor
 * Parent Render
 *    First Child Constructor
 *    First Child Render
 *    Second Child Contructor
 *    Second Child Render
 *
 *    DOM UPDATED For Children
 *
 *    first child componentDidMount
 *    second child componentDidMount
 * Parent componentDidMount
 */
