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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
        handleSearch();
    }
  };

  return (    
    <div style={{ display: "flex", margin: "2rem"}}>            
      <input
        //Campo de texto con soporte para la tecla Enter
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown} //Agregado para detectar cuando se presiona Enter
        style={{ flex: 1, padding: "0.5rem", color: "#000000"}}
      />
      <button onClick={handleSearch} style={{ marginLeft: "0.5rem" }}>
        <h3>Buscar</h3>
      </button>
    </div>
  );
};

export default SearchBar;
