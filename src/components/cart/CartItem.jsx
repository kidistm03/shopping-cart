import useCart from "../../hooks/useCart";
import "../../styles/CartItem.css";

function CartItem({ item }) {
  const { dispatch } = useCart();

  function increaseQuantity() {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        id: item.id,
        quantity: item.quantity + 1
      }
    });
  }

  function decreaseQuantity() {
    if (item.quantity > 1) {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: {
          id: item.id,
          quantity: item.quantity - 1
        }
      });
    }
  }

  function removeItem() {
    dispatch({
      type: "REMOVE_ITEM",
      payload: item.id
    });
  }

  return (
    <div className="cart-item">
      <img
        src={item.image}
        alt={item.title}
        className="cart-item-image"
      />

      <div className="cart-item-info">
        <h2>{item.title}</h2>

        <p>${item.price}</p>

        <div className="quantity-controls">
          <button onClick={decreaseQuantity}>
            −
          </button>

          <span>{item.quantity}</span>

          <button onClick={increaseQuantity}>
            +
          </button>
        </div>

        <button
          className="remove-button"
          onClick={removeItem}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;