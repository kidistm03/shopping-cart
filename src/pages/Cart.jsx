import useCart from "../hooks/useCart";

function Cart() {
  const { cart } = useCart();

  return (
    <div>
      <h1>Shopping Cart</h1>

      <p>Items in cart: {cart.length}</p>
    </div>
  );
}

export default Cart;