import RestaurantCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

export default function Body() {
  // const [listOfRestaurents, setListOfRestaurents] = useState(resList); static data
  const [listOfRestaurents, setListOfRestaurents] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [filteredRestaurents, setFilteredRestaurents] = useState([]);

  // wherener state variables update, react triggers a reconciliation cycle(re-render the component) e.g onchange fires
  console.log("body render");

  const topRatedRestaurentsList = () => {
    // let topRatedRestaurents = resList.filter((res) => res.data.avgRating > 4); for static data
    let topRatedRestaurents = listOfRestaurents.filter(
      (res) => res.info.avgRating > 4.2
    );

    console.log(topRatedRestaurents);
    // setListOfRestaurents(topRatedRestaurents); don't use this now
    setFilteredRestaurents(topRatedRestaurents);
  };

  // Search Logic

  // Using API but it's not working for image(used static img), swiggy api changing continuously
  // I'm using custom swiggy api

  useEffect(() => {
    fetchData();
  }, []);

  // for shimmer
  //   useEffect(() => {
  //   const timer = setTimeout(() => {
  //     fetchData();
  //   }, 5000); // 5000ms = 5 seconds
  //   Cleanup in case component unmounts before 5s
  //   return () => clearTimeout(timer);
  // }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://swiggy-api-4c740.web.app/swiggy-api.json"
    );
    const json = await data.json();
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // Optional Chaining ensures no crash if something is undefined
    setListOfRestaurents(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // initial when render
    setFilteredRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  // Loading to make better user experience like Shimmer
  // Conditional rendering

  return listOfRestaurents.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            id="search-text"
            type="text"
            className="search-box"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          ></input>
          <button
            onClick={() => {
              const filterRestaurents = listOfRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurents(filterRestaurents);
            }}
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={topRatedRestaurentsList}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurent-container">
        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} /> */}

        {filteredRestaurents.map((restaurant) => (
          // <RestaurantCard resData={restaurant} key={restaurant?.data?.id} /> for satic data

          <RestaurantCard resData={restaurant} key={restaurant?.info?.id} />
        ))}
      </div>
    </div>
  );
}
