import { LOGO_URL } from "../Utils/Constants";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Body Header Rendered");
  // Never make hooks outside the component
  useEffect(() => {
    console.log("UseEffect Called ");
  }, [btnNameReact]);

  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);
  console.log(data);

  // UseEffect will be called every time the component renderes
  // So if we put dependency array in Use   Effect it changes the behaviour of UseEffect
  // If no dependency array, then it's called on every render
  // If Dependency Array, then called on bases of dependency Array, it'll only be called when the dependency changes
  // If the dependency array is {btnNameReact} then it will be called whenever btnNameReact changes

  // If the dependency array is an empty = [] ==> then useEffect is called only on initial render(just once )
  // and just Once

  return (
    <div className="h-15 flex justify-between items-center bg-pink-100 sm:bg-green-300 lg:bg-brown-300">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/">Cart</Link>
          </li>
          <li className="px-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
                console.log(btnNameReact);
              }}
            >
              {btnNameReact}
            </button>
          </li>
          <li className="font-bold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
