import React, { lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { useState } from "react";
import { lazy, Suspense } from "react";
import UserContext from "./Utils/UserContext";
// import Grocery from "./components/Grocery";

/**
 * Header
 * - Logo
 * - Navbar
 *   Body
 * - Search
 * - Restaurant Cards
 *   - Images
 *   - Name of Res, Rating, Cuisine, etc
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

//   console.log(props);
//   const { resData } = props;

// load grocery component using lazy loading
const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    // make an API Call
    const data = {
      name: "Mudit Arora",
    };
    setUserName(data.name);
  }, []);
  return (
    // In order to use this context all over the app,
    // Just wrap this inside <UserContext.Provider>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <UserContext.Provider value={{ loggedInUser: "Elon" }}>
          <Header />
        </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery/",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
