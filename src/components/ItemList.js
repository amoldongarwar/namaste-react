// Need optimise RestaurentCategory.js with ItemList ref: Namaste React
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

export default function ItemList({ items }) {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items?.map((item) => {
        const info = item.card?.info || item; // works for menu & cart items

        return (
          <div
            key={info.id}
            className="p-2 m-2 border-b-2 text-left flex justify-between"
          >
            {/* Left Side */}
            <div className="w-9/12">
              <div className="py-2 font-semibold">
                <span>{info.name}</span>
                <span>
                  {" "}
                  - ₹{(info.price ? info.price : info.defaultPrice) / 100}
                </span>
              </div>

              <p className="text-xs text-gray-600">
                {info.description}
              </p>
            </div>

            {/* Right Side */}
            <div className="w-3/12 p-4 relative">
              <button
                className="absolute bottom-2 left-6 bg-white shadow-lg px-2 py-1 rounded-lg text-green-600 font-bold"
                onClick={() => handleAddItem(info)}
              >
                Add +
              </button>

              {info.imageId && (
                <img
              className="rounded-lg"
              alt="restaurent-logo"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/6/6/f6c81999-57b6-4eb7-ac66-dc1c3485f2e4_6ba607a5-1751-462a-a73d-68ae91ade469.jpg"
              // src={
              //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              //   resData.data.cloudinaryImageId
              // }
            ></img>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}