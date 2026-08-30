import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import "../styles/ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const { dispatch } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://fakestoreapi.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();

        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return <h1>Loading product...</h1>;
  }

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error}</p>

        <Link to="/shop">
          Back to Shop
        </Link>
      </div>
    );
  }
  function handleAddToCart() {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        ...product,
        quantity: 1
      }
    });
  }

  return (
    <div className="product-detail">
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="product-detail-image"
        />
      </div>

      <div className="product-detail-info">
        <h1>{product.title}</h1>

        <p className="product-detail-description">
          {product.description}
        </p>

        <p className="product-detail-category">
          Category: {product.category}
        </p>

        <p className="product-detail-price">
          ${product.price}
        </p>

        <p>
          {product.rating.rate}
        </p>
        <button
          className="add-cart-button"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <Link to="/shop" className="back-button">
          Back to Shop
        </Link>
      </div>
    </div>
  );
}

export default ProductDetail;