import "../../styles/SearchBar.css";
function SearchBar({ search, onSearch }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;