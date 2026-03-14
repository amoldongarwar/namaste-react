import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

export default function RestaurentCategory({ data, showItems, setShowIndex }) {
  const { title, items } = data;

  const dispatch = useDispatch();

  const handleAddItem = (items) => {
    console.log('itemsReduxStore',items);
    // Dispatch an action
    dispatch(addItem(items));
  };

  return (
    <div className="w-6/12 mx-auto bg-white shadow-lg rounded-xl p-4 text-left">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={setShowIndex}
      >
        <h2 className="font-bold text-lg">{title}</h2>
        <span className="text-xl">{showItems ? "⬆️" : "⬇️"}</span>
      </div>

      {showItems && (
        <div className="mt-4 space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-start border-b pb-2"
            >
              <div className="w-9/12">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="mt-1 text-gray-700 font-medium">
                  ₹{item.price / 100}
                </p>
                <p className="text-sm text-green-600">
                  ⭐ {item.rating} ({item.ratingCount})
                </p>
              </div>

              {item.imageId && (
                <div className="relative w-24">
                  <img
                   // src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/${item.imageId}`}
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/6/6/f6c81999-57b6-4eb7-ac66-dc1c3485f2e4_6ba607a5-1751-462a-a73d-68ae91ade469.jpg"
                    alt={item.name}
                    className="rounded-lg w-24 h-24 object-cover"
                  />

                  <button className="absolute bottom-1 left-2 bg-green-500 text-white px-2 py-1 text-sm font-bold rounded"
                          onClick={()=>handleAddItem(item)}
                  >
                    Add +
                  </button>
                </div>
              )}

            </div>
          ))}
        </div>
      )}
    </div>
  );
}
