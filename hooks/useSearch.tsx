import { useState } from "react";
import { Post } from "../lib/types";

interface UseSearchReturn {
  filteredPosts: Post[];
  handleSearch: (query: string) => void;
}
export const useSearch = (posts: Post[]): UseSearchReturn => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    const results = posts.filter(
      ({ title, body }) =>
        title.toLowerCase().includes(lowerCaseQuery) ||
        body.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredPosts(results);
  };

  return { filteredPosts, handleSearch };
};

export default useSearch;
