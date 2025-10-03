import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";

export default function RestaurentsMenu() {
  // const [resInfo, setResInfo] = useState(null); // Initially we kept null might be we will get some undefined errors for destrcting while loading so we can kept shimmer top
  // moved to custom hooks

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

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs.{item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
}
