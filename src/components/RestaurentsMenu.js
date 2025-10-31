import { useState } from "react";
import Shimmer from "./Shimmer";
import RestaurentCategory from "./RestaurentCategory";
import { customMockData } from "../utils/customMockData";

export default function RestaurentsMenu() {
  const [showIndex, setShowIndex] = useState(null);
  const { restaurant, categories } = customMockData;

  if (!restaurant || !categories) return <Shimmer />;

  const categoriesSafe = Array.isArray(categories) ? categories : [];

  return (
    <div className="text-center my-8">
      <h1 className="font-bold my-6 text-2xl">{restaurant.name}</h1>
      <p className="font-semibold text-lg text-gray-700">
        {restaurant.cuisines.join(", ")} - {restaurant.costForTwoMessage}
      </p>

      {/* Categories accordion */}
      <div className="mt-6 space-y-4">
        {categoriesSafe.map((category, index) => (
          <RestaurentCategory
            key={category.categoryId || index}
            data={category}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
          />
        ))}
      </div>
    </div>
  );
}