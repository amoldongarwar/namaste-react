import { useState } from "react";
import ItemList from "./ItemList";

export default function RestaurentCategory({ data, showItems, setShowIndex }) {
  console.log("data", data);

  // const [showItems, setShowItems] = useState(false);  Lifting up state to expand contract particular accordion
  
  const handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex(); // ✅ just call it (index comes from parent)
  }

  return (
    <div>
      {/* Header */}

      <div className="w-6/12 mx-auto my-4 bg-gray-400 shadow-lg p-4">
        <div onClick={handleClick} className="flex cursor-pointer justify-between">
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {/* Show and hide when we clicked */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>

      {/* Accordion Body */}
    </div>
  );
}
