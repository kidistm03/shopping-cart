import "./SortSelect.css";

function SortSelect({ sort, onSort }) {
  return (
    <div className="sort-box">
      <label htmlFor="sort">
        Sort by:
      </label>

      <select
        id="sort"
        value={sort}
        onChange={(event) => onSort(event.target.value)}
      >
        <option value="default">
          Default
        </option>

        <option value="price-low">
          Price: Low to High
        </option>

        <option value="price-high">
          Price: High to Low
        </option>

        <option value="name">
          Name: A-Z
        </option>

        <option value="rating">
          Rating
        </option>
      </select>
    </div>
  );
}

export default SortSelect;