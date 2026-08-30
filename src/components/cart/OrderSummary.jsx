import "../../styles/OrderSummary.css";

function OrderSummary({ cart }) {
  const itemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.15;

  const total = subtotal + tax;

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>

      <div className="summary-row">
        <span>Items</span>
        <span>{itemCount}</span>
      </div>

      <div className="summary-row">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className="summary-row">
        <span>Tax (15%)</span>
        <span>${tax.toFixed(2)}</span>
      </div>

      <hr />

      <div className="summary-total">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default OrderSummary;