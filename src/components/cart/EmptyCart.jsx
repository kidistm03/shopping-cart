import { Link } from "react-router-dom";

import "../../styles/EmptyCart.css";

function EmptyCart() {
  return (
    <main className="empty-cart">
      <h1>Your Cart Is Empty</h1>

      <p>
        You haven't added anything to your cart yet.
      </p>

      <Link to="/shop">
        Continue Shopping
      </Link>
    </main>
  );
}

export default EmptyCart;