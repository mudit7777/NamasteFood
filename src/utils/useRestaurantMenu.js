import React from "react";
import { useState, useEffect } from "react";
import { MENU_API } from "./Constants";
const useRestaurantMenu = (resId) => {
  // useState for resInfo
  const [resInfo, setResInfo] = useState(null);

  // useEffect for API Call
  useEffect(() => {
    // function call for fetch data
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  console.log("RESinFO " + resInfo);

  return resInfo;
};

export default useRestaurantMenu;
