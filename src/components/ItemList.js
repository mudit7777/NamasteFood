import React from "react";
import { CDN_URL } from "../Utils/Constants";
import { addItem } from "../Utils/cartSlice";
import { Provider, useDispatch } from "react-redux";

const ItemsList = ({ items }) => {
  console.log("Items", items);
  // useDispatch is a hook from react-redux
  // used to dispatch an action which will call a reducer function
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    console.log(item);
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items?.map((item) => (
        <div
          key={item?.card?.info?.id} // Optional chaining here
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                {" "}
                -{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 shadow-lg mx-14 rounded-lg text-white bg-black"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            {item?.card?.info?.imageId && (
              <img src={CDN_URL + item.card.info.imageId} className="w-full" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemsList;
