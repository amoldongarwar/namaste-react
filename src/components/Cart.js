import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

function Cart() {
    // Use selector -> specific selection
    const cartItems = useSelector((store)=>store.cart.items);

    // Use specific selector dont use below one 
    // this will Select the ENTIRE Redux store and re-renders whenever anything in store changes
    // const store = useSelector((store) => store);
    // const cartItems = store.cart.items;


    console.log('cartItems',cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart()); // Immediately call
    }


    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button
                    className="p-2 m-2 bg-black text-white rounded-lg"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
                {cartItems.length===0 && <h1>Cart is empty. Add to the cart!</h1>}
                <ItemList items={cartItems}/> 
                {/*reuse itemList logic*/}
            </div>
        </div>
    )
}

export default Cart;