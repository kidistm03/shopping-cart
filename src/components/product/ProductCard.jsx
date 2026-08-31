import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import "../../styles/ProductCard.css";

function ProductCard({ product }) {
  const { dispatch } = useCart();

  function handleAddToCart() {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  }

  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-info">
        <Link to={`/shop/${product.id}`}>
          <h2>{product.title}</h2>
        </Link>

        <p className="product-price">${product.price}</p>

        <button type="button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;