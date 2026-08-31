import useCart from "../../hooks/useCart";

import "../../styles/CartItem.css";

function CartItem({ item }) {
  const { dispatch } = useCart();

  function increaseQuantity() {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: item.id
    });
  }

  function decreaseQuantity() {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: item.id
    });
  }

  function removeItem() {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: item.id
    });
  }

  return (
    <article className="cart-item">
      <img
        src={item.image}
        alt={item.title}
      />

      <div className="cart-item-info">
        <h2>{item.title}</h2>

        <p>${item.price}</p>

        <div className="quantity-controls">
          <button
            type="button"
            onClick={decreaseQuantity}
            disabled={item.quantity === 1}
          >
            −
          </button>

          <span>{item.quantity}</span>

          <button
            type="button"
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={removeItem}
          className="remove-button"
        >
          Remove
        </button>
      </div>
    </article>
  );
}

export default CartItem;