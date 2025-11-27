import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, dispatch } = useCart();

 const total = cart.reduce(
  (sum, item) =>
    sum + item.qty * Number(item.price.replace(/₦|,/g, "")),
  0
);


  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-4 bg-white shadow rounded-lg"
            >
              <img src={item.img} className="w-20 h-20 rounded" />

              <div className="ml-4 flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-500">{item.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-3">
                <button
                  className="px-3 py-1 bg-gray-300 rounded"
                  onClick={() =>
                    dispatch({ type: "DECREASE_QTY", payload: item.id })
                  }
                >
                  -
                </button>

                <span className="text-lg font-bold">{item.qty}</span>

                <button
                  className="px-3 py-1 bg-gray-300 rounded"
                  onClick={() =>
                    dispatch({ type: "INCREASE_QTY", payload: item.id })
                  }
                >
                  +
                </button>
              </div>

              {/* Remove */}
              <button
                className="ml-6 text-red-500 font-bold"
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                }
              >
                Remove
              </button>
            </div>
          ))}

          {/* Cart Total */}
          <div className="text-right mt-10">
            <h3 className="text-2xl font-bold">Total: ₦{total}</h3>
            <button className="mt-4 px-8 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
