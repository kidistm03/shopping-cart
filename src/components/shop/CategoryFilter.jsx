import useCategories from "../../hooks/useCategories";
import "../../styles/CategoryFilter.css";

function CategoryFilter({ category, setCategory }) {
  const { categories, loading } = useCategories();

  return (
    <div className="category-filter">
      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        disabled={loading}
      >
        <option value="all">All Categories</option>

        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;