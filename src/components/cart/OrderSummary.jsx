import useCart from "../../hooks/useCart";

import "../../styles/OrderSummary.css";

function OrderSummary() {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <aside className="order-summary">
      <h2>Order Summary</h2>

      <div className="summary-row">
        <span>Items</span>
        <span>
          {cart.reduce(
            (total, item) =>
              total + item.quantity,
            0
          )}
        </span>
      </div>

      <div className="summary-row">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className="summary-total">
        <span>Total</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <button type="button">
        Checkout
      </button>
    </aside>
  );
}

export default OrderSummary;