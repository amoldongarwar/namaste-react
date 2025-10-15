export default function ItemList({ items }) {
  console.log("items", items);

  return (
    <div>
      {items?.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border border-white-400 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p>
              <span className="text-xs"> {item.card.info.description}</span>
            </p>
          </div>

          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-1 mx-auto rounded-lg bg-white shadow-lg m-auto">
                Add +
              </button>
            </div>
            <img
              className="rounded-lg"
              alt="restaurent-logo"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/6/6/f6c81999-57b6-4eb7-ac66-dc1c3485f2e4_6ba607a5-1751-462a-a73d-68ae91ade469.jpg"
              // src={
              //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              //   resData.data.cloudinaryImageId
              // }
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
}
