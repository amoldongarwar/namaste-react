import RestaurantCard, { withPromotedLabel } from "./RestaurentCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export default function Body() {
  // const [listOfRestaurents, setListOfRestaurents] = useState(resList); static data
  const [listOfRestaurents, setListOfRestaurents] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [filteredRestaurents, setFilteredRestaurents] = useState([]);

  // Higher Order Component
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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
    setFilteredRestaurents(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Loading to make better user experience like Shimmer
  // Conditional rendering

  // check online status
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
    );

  return listOfRestaurents.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search m-4 p-4">
          <input
            id="search-text"
            type="text"
            className=" border border-solid border-black"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // Filter restaurent cards and update UI
              // SearchText

              const filterRestaurents = listOfRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurents(filterRestaurents);
            }}
          >
            Search
          </button>

          <button
            className="px-4 py-2 bg-teal-400 rounded-lg"
            onClick={topRatedRestaurentsList}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} /> */}

        {filteredRestaurents.map((restaurant) => (
          // <RestaurantCard resData={restaurant} key={restaurant?.data?.id} /> for satic data
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {console.log("restaurant", restaurant)}
            {/* If restaurant is promoted then add promoted label to it we don't have promoted params in api so keep based on rating */}
            {restaurant.info.avgRating === 4.3 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
