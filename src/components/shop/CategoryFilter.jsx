import "./CategoryFilter.css";

function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange
}) {
  return (
    <div className="category-filter">
      <button
        className={selectedCategory === "all" ? "active" : ""}
        onClick={() => onCategoryChange("all")}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          className={
            selectedCategory === category ? "active" : ""
          }
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;