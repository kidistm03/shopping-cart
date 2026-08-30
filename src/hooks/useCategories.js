import { useEffect, useState } from "react";

function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchCategories() {
    try {
      setLoading(true);

      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );

      const data = await response.json();

      setCategories(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categories,
    loading
  };
}

export default useCategories;