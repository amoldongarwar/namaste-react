// Integrate using API to load the menu of particular restaurant

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurentCategory from "./RestaurentCategory";

export default function RestaurentsMenu() {
  // const [resInfo, setResInfo] = useState(null); // Initially we kept null might be we will get some undefined errors for destrcting while loading so we can kept shimmer top
  // moved to custom hooks

  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // moved to custom hooks

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API_URL + resId);

  //   const json = await data.json();
  //   console.log("json", json);
  //   setResInfo(json.data);
  // };

  if (resInfo === null) return <Shimmer />; // kept top to fixed undefine errors

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card; //recommended

  console.log(itemCards);

  console.log(
    "itemCardsList",
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("categories", categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>

      {/* categories  accordion */}

      {categories.map((category, index) => (
        // Controlled component parent is controlling
        <RestaurentCategory data={category?.card?.card} key={category?.card?.card?.categoryId}
         showItems = {index===showIndex && true}  
        // {/* similar to showItms = {index===1 ? true : false} */}
        setShowIndex={()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
}