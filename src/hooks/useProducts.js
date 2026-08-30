import { useEffect, useState } from "react";

function useProducts(category = "all") {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchProducts() {
    try {
      setLoading(true);
      setError("");

      let url = "https://fakestoreapi.com/products";

      if (category !== "all") {
        url = `https://fakestoreapi.com/products/category/${category}`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();

      setProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [category]);

  return {
    products,
    loading,
    error,
    retry: fetchProducts
  };
}

export default useProducts;