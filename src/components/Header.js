import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Body Header Rendered");

  useEffect(() => {
    console.log("UseEffect Called ");
  }, []);

  // UseEffect will be called every time the component renderes
  // So if we put dependency array in UseEffect it changes the behaviour of UseEffect
  // If no dependency array, then it's called on every render
  // If Dependency Array, then called on bases of dependency Array, it'll only be called when the dependency changes
  // If the dependency array is {btnNameReact} then it will be called whenever btnNameReact changes

  // If the dependency array is an empty = [] ==> then useEffect is called only on initial render(just once )
  // and just Once
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
