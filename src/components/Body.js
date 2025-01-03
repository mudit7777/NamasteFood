import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  // State Variable / Local State Variable  - Super Powerful Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestraunt, setFilteredRestraunts] = useState([]);

  // Whenever state variable update, react triggers a reconcilation cycle(re-renders the component)

  console.log("Body Rendered ", listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  // react's react fibre, the reconcilation process, that updates DOM when required
  // Also update only that part of the DOM which is required to update
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunts(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!!, Please check your internet connection
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-500 m-4 rounded-lg"
            onClick={() => {
              console.log(searchText);
              const filteredRestraunt = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestraunts(filteredRestraunt);
            }}

            // Filter the restaurant cards and update the UI
            // Search text
            // take the value of the input box
            // bind the value to the local state variable of react
          >
            Search
          </button>
        </div>
        <div className="flex items-center rounded-m">
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
            onClick={() => {
              className = "";
              // Filter logic here to have rating above 4.2
              const filteredResList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestraunts(filteredResList);
              console.log(filteredResList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap ">
        {
          // loop over all restaurants
          // for each restraunt we have to return a restaurant
          filteredRestraunt.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        }
      </div>
    </div>
  );
};
export default Body;
