import { useState, FC } from "react";
import { debounce } from "../../lib/utils/debounce";
import { SearchContainer, SearchInput } from "./style";

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const debouncedSearch = debounce(onSearch, 300);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };
  return (
    <SearchContainer>
      <SearchInput
        onChange={handleChange}
        placeholder="Search for a post"
        value={query}
        type="search"
      />
    </SearchContainer>
  );
};

export default Search;
