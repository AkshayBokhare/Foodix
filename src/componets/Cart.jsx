import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4 flex justify-center">
            <div className="w-full max-w-2xl">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">Cart ({cartItems.length})</h1>
                    {cartItems.length > 0 && (
                        <button
                            className="text-sm font-semibold text-red-500 border border-red-400 px-3 py-1 rounded-lg hover:bg-red-50"
                            onClick={() => dispatch(clearCart())}
                        >
                            Clear Cart
                        </button>
                    )}
                </div>

                {cartItems.length === 0 ? (
                    <div className="bg-white rounded-2xl shadow-sm p-10 text-center text-gray-400 font-semibold">
                        Your cart is empty. Add some items!
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-200">
                        {cartItems.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between px-6 py-4 gap-5">
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 text-base">{item.name}</h3>
                                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">{item.description}</p>
                                    <p className="font-bold text-gray-800 mt-2">₹ {item.price}</p>
                                </div>
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover rounded-xl shadow-sm shrink-0"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
