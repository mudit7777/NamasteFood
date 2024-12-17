import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>This is About Component</h1>
      <User name={"Mudit (function)"} />
      <UserClass
        name={"Mudit (Class)"}
        location={"Thari range te bahar"}
        contact={"9050055553"}
      />
    </div>
  );
};

export default About;
