import UserContext from "../Utils/UserContext";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  // About class constructors
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
        <div>
          Logged In User
          <UserContext.Consumer>
            {/*this takes in JSX  */}
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h1>This is About Component</h1>

        <UserClass
          name={"First (Class)"}
          location={"FirstPur"}
          contact={"8788866667"}
        />
      </div>
    );
  }
}

export default About;
