import ItemsList from "./ItemList";
import { useState, useEffect } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // expand collapse items
  const [setShowItems] = useState(false);
  const handleClick = () => {
    setShowIndex();
    //The setShowIndex function (received via props) is called in the handleClick method
    // to notify the parent component when a category is clicked.
  };

  return (
    <div>
      {/*Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 rounded-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemsList items={data.itemCards} />}
      </div>
      {/*Accordian Body */}
    </div>
  );
};
export default RestaurantCategory;
