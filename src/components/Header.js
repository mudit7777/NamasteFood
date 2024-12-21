import { LOGO_URL } from "../Utils/Constants";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Body Header Rendered");
  // Never make hooks outside the component
  useEffect(() => {
    console.log("UseEffect Called ");
  }, [btnNameReact]);

  const onlineStatus = useOnlineStatus();

  // UseEffect will be called every time the component renderes
  // So if we put dependency array in Use   Effect it changes the behaviour of UseEffect
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
          <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Cart</Link>
          </li>
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
