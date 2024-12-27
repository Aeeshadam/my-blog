import React, { useState } from "react";
import { SearchContainer, SearchInput } from "./style";

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };
  return (
    <SearchContainer>
      <SearchInput
        onChange={handleChange}
        placeholder="Search for a post"
        value={query}
        type="text"
      />
    </SearchContainer>
  );
};

export default Search;
