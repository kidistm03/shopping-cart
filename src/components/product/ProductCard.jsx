import { Link } from "react-router-dom";

import useCart from "../../hooks/useCart";

import "../../styles/ProductCard.css";

function ProductCard({ product }) {
  const { dispatch } = useCart();

  function handleAddToCart() {
    dispatch({
      type: "ADD_TO_CART",
      payload: product
    });
  }

  return (
    <article className="product-card">
      <Link to={`/shop/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
        />

        <h2>{product.title}</h2>
      </Link>

      <p>${product.price}</p>

      <button
        type="button"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </article>
  );
}

export default ProductCard;