import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import "../../styles/Navbar.css";

function Navbar() {
  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        MyShop
      </Link>

      <div className="nav-links">
        <Link to="/">
          Home
        </Link>

        <Link to="/shop">
          Shop
        </Link>

        <Link to="/cart" className="cart-link">
          Cart
          <span className="cart-badge">
            {cartCount}
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;