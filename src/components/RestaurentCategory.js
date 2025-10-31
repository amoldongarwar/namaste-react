export default function RestaurentCategory({ data, showItems, setShowIndex }) {
  const { title, items } = data;

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
                <img
                  src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/${item.imageId}`}
                  alt={item.name}
                  className="rounded-lg w-24 h-24 object-cover"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
