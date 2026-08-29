import useProducts from "../hooks/useProducts";
import ProductGrid from "../components/product/ProductGrid";
import SkeletonCard from "../components/product/SkeletonCard";
import "../components/product/ProductGrid.css";

function Shop() {
  const {
    products,
    loading,
    error,
    retry
  } = useProducts();

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

      <ProductGrid products={products} />
    </div>
  );
}

export default Shop;