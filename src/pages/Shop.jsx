import { useState } from "react";

import useProducts from "../hooks/useProducts";
import useCategories from "../hooks/useCategories";

import ProductGrid from "../components/product/ProductGrid";
import SkeletonCard from "../components/product/SkeletonCard";

import CategoryFilter from "../components/shop/CategoryFilter";
import SearchBar from "../components/shop/SearchBar";
import SortSelect from "../components/shop/SortSelect";

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  const {
    products,
    loading,
    error,
    retry
  } = useProducts(
    "https://fakestoreapi.com/products"
  );

  const {
    categories
  } = useCategories();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const sortedProducts = [...filteredProducts];

  if (sort === "price-low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "price-high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  if (sort === "name") {
    sortedProducts.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  if (sort === "rating") {
    sortedProducts.sort(
      (a, b) => b.rating.rate - a.rating.rate
    );
  }

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

      <SearchBar
        search={search}
        onSearch={setSearch}
      />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <SortSelect
        sort={sort}
        onSort={setSort}
      />

      <ProductGrid products={sortedProducts} />
    </div>
  );
}

export default Shop;