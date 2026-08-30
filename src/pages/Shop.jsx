import { useState } from "react";

import useProducts from "../hooks/useProducts";
import useCategories from "../hooks/useCategories";

import ProductGrid from "../components/product/ProductGrid";
import SkeletonCard from "../components/product/SkeletonCard";
import CategoryFilter from "../components/shop/CategoryFilter";

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const {
    products,
    loading,
    error,
    retry
  } = useProducts(selectedCategory);

  const {
    categories
  } = useCategories();

  if (loading) {
    return (
      <div>
        <h1>Shop</h1>

        <div className="product-grid">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Shop</h1>

        <p>{error}</p>

        <button onClick={retry}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Shop</h1>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <ProductGrid products={products} />
    </div>
  );
}

export default Shop;