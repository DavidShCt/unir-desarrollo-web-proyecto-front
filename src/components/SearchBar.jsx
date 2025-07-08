import "./SearchBar.css";

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder="Buscar por título, autor, ISBN, etc..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
