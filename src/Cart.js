import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./components/ItemList";
import { clearCart } from "./Utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center">
      <h2 className="text-yellow-700 font-bold text-center m-4 p-4">
        {" "}
        This is the Card Screen
      </h2>

      <div className="w-6/12 m-auto">
        <button
          className=" p-2 m-2 bg-black text-white rounded-lg "
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length == 0 && <h1>Your cart is empty, Please add items</h1>}
        <ItemsList items={cartItems} />{" "}
      </div>
    </div>
  );
};

export default Cart;
