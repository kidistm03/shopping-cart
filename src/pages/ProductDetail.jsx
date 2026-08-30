import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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

  function handleAddToCart() {
    dispatch({
      type: "ADD_TO_CART",
      payload: product
    });
  }

  if (loading) {
    return (
      <main className="product-detail">
        <p>Loading product...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="product-detail">
        <h2>Something went wrong</h2>
        <p>{error}</p>
      </main>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <main className="product-detail">
      <div className="product-detail-image">
        <img
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="product-detail-info">
        <p className="product-category">
          {product.category}
        </p>

        <h1>{product.title}</h1>

        <p className="product-price">
          ${product.price}
        </p>

        <p className="product-description">
          {product.description}
        </p>

        <p className="product-rating">
          ⭐ {product.rating.rate} ({product.rating.count} reviews)
        </p>

        <button
          type="button"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </main>
  );
}

export default ProductDetail;