import RestaurantCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

export default function Body() {
  // const [listOfRestaurents, setListOfRestaurents] = useState(resList); static data
  const [listOfRestaurents, setListOfRestaurents] = useState([]);

  const topRatedRestaurentsList = () => {
    // let topRatedRestaurents = resList.filter((res) => res.data.avgRating > 4); for static data
    let topRatedRestaurents = listOfRestaurents.filter(
      (res) => res.info.avgRating > 4.2
    );

    console.log(topRatedRestaurents);
    setListOfRestaurents(topRatedRestaurents);
  };

  // Using API but it's not working for image(used static img), swiggy api changing continuously
  // I'm using custom swiggy api

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://swiggy-api-4c740.web.app/swiggy-api.json"
    );
    const json = await data.json();
    console.log(json);
    // Optional Chaining ensures no crash if something is undefined
    setListOfRestaurents(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Loading to make better user experience

  if (listOfRestaurents.length === 0) {
    return <h1>Loading...</h1>;
  }

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
          // <RestaurantCard resData={restaurant} key={restaurant?.data?.id} /> for satic data

          <RestaurantCard resData={restaurant} key={restaurant?.info?.id} />
        ))}
      </div>
    </div>
  );
}
