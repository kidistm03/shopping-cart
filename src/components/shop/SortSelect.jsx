import "../../styles/SortSelect.css";

function SortSelect({ sort, setSort }) {
  return (
    <div className="sort-select">
      <select
        value={sort}
        onChange={(event) => setSort(event.target.value)}
      >
        <option value="default">
          Sort By
        </option>

        <option value="price-low">
          Price: Low to High
        </option>

        <option value="price-high">
          Price: High to Low
        </option>

        <option value="name">
          Name: A to Z
        </option>
      </select>
    </div>
  );
}

export default SortSelect;