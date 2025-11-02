import { useContext } from "react";
import userContext from "../utils/UserContext";

export default function RestaurantCard(props) {
  // console.log("props", props);

  const { resData } = props;

  const { loggedInUser } = useContext(userContext);

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla
    // deliveryTime  static data
  } = resData?.info;
  // resData?.data;    static data

  return (
    <div className="m-4 p-4 w-[250px] bg-yellow-100 rounded-lg hover:bg-purple-600">
      {/* specific size [250px] */}
      <img
        className="rounded-lg"
        alt="restaurent-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/6/6/f6c81999-57b6-4eb7-ac66-dc1c3485f2e4_6ba607a5-1751-462a-a73d-68ae91ade469.jpg"
        // src={
        //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
        //   resData.data.cloudinaryImageId
        // }
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h3>{avgRating}</h3>
      {/* <h4>₹{costForTwo / 100} for two</h4> */}
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
}


// Higher Order Component

// Input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return(props) => {
    return(
      <div>
        <label className="absolute bg-green-500 text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}
