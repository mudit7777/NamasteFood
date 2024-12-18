import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  // class constructor
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>This is About Component</h1>

        <UserClass
          name={"First (Class)"}
          location={"FirstPur"}
          contact={"7777788888"}
        />
      </div>
    );
  }
}

export default About;
