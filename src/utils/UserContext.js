// Global kind of a object for React
import { createContext } from "react";
const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;
