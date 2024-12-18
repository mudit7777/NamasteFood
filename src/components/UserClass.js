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

    // set State
    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
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
 * ---Mounting---
 * Constructor (dummy)
 * Render (dummy)
 *    <HTML Dummy>
 * Component Did Mount
 *    <API Call>
 *    <this.setState> -> State Variable Update
 * Once the this.setState is called, it calls the render() method again
 *
 * --UPDATE
 *
 * render(API Data)
 * <HTML (new API Data)
 * componentDidUpdate
 *
 */
