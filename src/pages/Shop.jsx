import { useState } from "react";
import "../styles/Shop.css";
import useProducts from "../hooks/useProducts";
import useCategories from "../hooks/useCategories";

import ProductGrid from "../components/product/ProductGrid";
import SkeletonCard from "../components/product/SkeletonCard";

import CategoryFilter from "../components/shop/CategoryFilter";
import SearchBar from "../components/shop/SearchBar";
import SortSelect from "../components/shop/SortSelect";

function Shop() {
  const {
    products,
    loading,
    error
  } = useProducts("https://fakestoreapi.com/products");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search
    if (search.trim() !== "") {
      result = result.filter((product) =>
        product.title
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    // Category
    if (category !== "all") {
      result = result.filter(
        (product) => product.category === category
      );
    }

    // Sort
    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "name") {
      result.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    return result;
  }, [products, search, category, sort]);

  return (
    <main className="shop-page">
      <h1>Shop</h1>

      <div className="shop-controls">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <CategoryFilter
          category={category}
          setCategory={setCategory}
        />

        <SortSelect
          sort={sort}
          setSort={setSort}
        />
      </div>

      {loading && (
        <div className="product-grid">
          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      )}

      {error && (
        <div className="error-message">
          <h2>Something went wrong</h2>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <ProductGrid products={filteredProducts} />
      )}
    </main>
  );
}

export default Shop;