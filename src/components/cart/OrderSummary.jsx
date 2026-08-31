import { useState } from "react";
import useCart from "../../hooks/useCart";

import CheckoutForm from "./CheckoutForm";

import "../../styles/OrderSummary.css";

function OrderSummary() {
  const { cart } = useCart();

  const [showCheckout, setShowCheckout] = useState(false);

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const itemCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  return (
    <aside className="order-summary">
      <h2>Order Summary</h2>

      <div className="summary-row">
        <span>Items</span>
        <span>{itemCount}</span>
      </div>

      <div className="summary-row">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className="summary-total">
        <span>Total</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      {!showCheckout && (
        <button
          type="button"
          onClick={() => setShowCheckout(true)}
        >
          Checkout
        </button>
      )}

      {showCheckout && (
        <CheckoutForm total={subtotal} />
      )}
    </aside>
  );
}

export default OrderSummary;