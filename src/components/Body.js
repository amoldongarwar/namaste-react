import RestaurantCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";

export default function Body() {
  const [listOfRestaurents, setlistOfRestaurents] = useState(resList);

  const topRatedRestaurentsList = () => {
    let topRatedRestaurents = resList.filter((res) => res.data.avgRating > 4);
    console.log(topRatedRestaurents);
    setlistOfRestaurents(topRatedRestaurents);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={topRatedRestaurentsList}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurent-container">
        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} /> */}

        {listOfRestaurents.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.data.id} />
        ))}
      </div>
    </div>
  );
}
