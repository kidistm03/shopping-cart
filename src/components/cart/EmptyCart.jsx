import { Link } from "react-router-dom";
import "../../styles/EmptyCart.css";

function EmptyCart() {
  return (
    <div className="empty-cart">
      <h1>Your Cart is Empty</h1>

      <p>
        You haven't added any products yet.
      </p>

      <Link to="/shop" className="shop-button">
        Continue Shopping
      </Link>
    </div>
  );
}

export default EmptyCart;