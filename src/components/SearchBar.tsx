import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (    
    <div style={{ display: "flex", margin: "2rem"}}>            
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ flex: 1, padding: "0.5rem", color: "#000000"}}
      />
      <button onClick={handleSearch} style={{ marginLeft: "0.5rem" }}>
        <h3>Buscar</h3>
      </button>
    </div>
  );
};

export default SearchBar;
