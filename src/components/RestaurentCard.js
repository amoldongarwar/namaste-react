export default function RestaurantCard(props) {
  console.log("props", props);

  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className="restaurent-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restaurent-logo"
        alt="restaurent-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/6/6/f6c81999-57b6-4eb7-ac66-dc1c3485f2e4_6ba607a5-1751-462a-a73d-68ae91ade469.jpg"
        // src={
        //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
        //   resData.data.cloudinaryImageId
        // }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h3>{avgRating}</h3>
      <h4>₹{costForTwo / 100} for two</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};