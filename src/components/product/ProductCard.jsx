import { Link } from "react-router-dom";
import "../../styles/ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />

      <div className="product-info">
        <h2>{product.title}</h2>

        <p className="product-price">
          ${product.price}
        </p>

        <p>⭐ {product.rating.rate}</p>

        <Link to={`/shop/${product.id}`} className="view-button">
          View Product
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;