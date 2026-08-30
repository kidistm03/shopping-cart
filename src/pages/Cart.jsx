import useCart from "../hooks/useCart";

import CartItem from "../components/cart/CartItem";
import OrderSummary from "../components/cart/OrderSummary";
import EmptyCart from "../components/cart/EmptyCart";

import "../styles/Cart.css";

function Cart() {
  const { cart, dispatch } = useCart();

  function clearCart() {
    const confirmed = window.confirm(
      "Are you sure you want to clear your cart?"
    );

    if (confirmed) {
      dispatch({
        type: "CLEAR_CART"
      });
    }
  }

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Shopping Cart</h1>

        <button
          className="clear-cart-button"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}
        </div>

        <OrderSummary cart={cart} />
      </div>
    </div>
  );
}

export default Cart;