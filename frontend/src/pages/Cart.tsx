import { useAppDispatch, useAppSelector } from "../app/hooks/redux-hooks";
import { Button } from "flowbite-react";
import { removeProductFromCart, updateProductQuantity } from "../app/slices/AppSlice";
import { CheckoutPopup } from "../components/CheckoutPopup";
import { useState } from "react";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.app);

  // Calculate total amount, accounting for fractional quantities
  const getTotalAmount = () => {
    const total = cart.reduce(
      (sum, item) => sum + Number(item.price) * (item.quantity || 1),
      0
    );
    return total; // Return raw numeric value
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    if (quantity <= 0) return; // Prevent zero or negative quantities
    dispatch(updateProductQuantity({ productId, quantity }));
  };

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [deliveryFee, setDeliveryFee] = useState<number>(0); // State for delivery fee

  return (
    <div className="py-14">
      <CheckoutPopup
        openModal={openModal}
        setOpenModal={setOpenModal}
        total={getTotalAmount()} // Pass raw total to CheckoutPopup
        deliveryFee={deliveryFee} // Pass delivery fee to CheckoutPopup
        setDeliveryFee={setDeliveryFee} // Allow updating delivery fee in CheckoutPopup
      />
      <div className="pb-4 border-b flex justify-between items-center">
        <h1 className="text-3xl">Your Shopping Cart</h1>
        {cart.length > 0 && (
          <Button onClick={() => setOpenModal(true)}>
            Checkout (Ksh. {getTotalAmount().toLocaleString()})
          </Button>
        )}
      </div>

      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-20">
          <h2>Your Cart is Empty</h2>
          <img
            src="https://3ec40e103fd1581afe048c3ca1d8d9c4.cdn.bubble.io/f1725529857594x125048921830299020/image%2037.svg"
            alt="Empty Cart"
            className="w-48"
          />
        </div>
      )}

      {cart.length > 0 && (
        <div className="bg-white px-10 py-10">
          <div>
            <h2>Cart ({cart.length})</h2>
          </div>
          {cart.map((item, index) => (
            <div
              key={index}
              className="p-8 border-b flex justify-between items-start"
            >
              <div className="flex gap-10">
                <img src={item.cover_image} alt={item.name} className="w-20" />
                <div>
                  <h2 className="text-2xl">{item.name}</h2>
                  <p className="text-xs text-red-700">Few Units Left</p>
                  <h2>
                    GREEN RE-USE{" "}
                    <span className="text-green-500">Express</span>
                  </h2>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-5">
                <h2 className="text-2xl">
                  Ksh{" "}
                  {Number(item.price * (item.quantity || 1)).toLocaleString()}
                </h2>

                {/* Fractional Quantity Adjustment */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      handleQuantityChange(item._id, (item.quantity || 1) - 0.5)
                    }
                    className="px-2 py-1 bg-gray-300 rounded"
                    disabled={(item.quantity || 1) <= 0.5}
                  >
                    - 0.5
                  </button>
                  <input
                    type="number"
                    step="0.5"
                    value={item.quantity || 1}
                    onChange={(e) =>
                      handleQuantityChange(
                        item._id,
                        parseFloat(e.target.value) || 0.5
                      )
                    }
                    min="0.5"
                    className="w-12 text-center border"
                  />
                  <button
                    onClick={() =>
                      handleQuantityChange(item._id, (item.quantity || 1) + 0.5)
                    }
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    + 0.5
                  </button>
                </div>

                <Button
                  onClick={() => dispatch(removeProductFromCart(item._id))}
                  color="red"
                >
                  Remove From Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
