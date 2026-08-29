import useCart from "../hooks/useCart";

function Cart() {
  const { cart, dispatch } = useCart();

  return (
    <div>
      <h1>Shopping Cart</h1>

      <p>Items in cart: {cart.length}</p>

      <button
        onClick={() =>
          dispatch({
            type: "ADD_ITEM",
            payload: {
              id: 1,
              title: "Test Product",
              price: 100,
              quantity: 1
            }
          })
        }
      >
        Add Test Product
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "CLEAR_CART"
          })
        }
      >
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;