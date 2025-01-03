// Importing the name exports
import { CDN_URL } from "../Utils/Constants";
import { useContext } from "react";
import UserContext from "../Utils/UserContext";

const RestaurantCard = (props) => {
  console.log(props);
  const { resData } = props;

  const { loggedInUser } = useContext(UserContext);

  // optimize the code for resData
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  return (
    <div className="p-4 m-4 w-[250px] rounded-lg bg-gray-100 hover:bg-red-400">
      <img
        className=" rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating + "⭐"}</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
      <h4>{loggedInUser}</h4>
    </div>
  );
};
export default RestaurantCard;
