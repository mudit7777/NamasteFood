import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useReducer, useState } from "react";

const Body = () => {
  // State Variable / Local State Variable  - Super Powerful Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestraunt, setFilteredRestraunts] = useState([]);

  // Whenever state variable update, react triggers a reconcilation cycle(re-renders the component)

  console.log("Body Rendered ");
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
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    // Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunts(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here to have rating above 4.2
            const filteredResList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestraunts(filteredResList);
            console.log(filteredResList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {
          // loop over all restaurants
          // for each restraunt we have to return a restaurant
          filteredRestraunt.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        }
      </div>
    </div>
  );
};
export default Body;
