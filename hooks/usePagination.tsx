import { useState } from "react";
import { Post } from "../lib/types";

interface UsePaginationReturn {
  currentPosts: Post[];
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
  postsPerPage: number;
}
const UsePagination = (
  posts: Post[],
  postsPerPage: number = 10
): UsePaginationReturn => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const currentPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return {
    currentPosts,
    currentPage,
    totalPages,
    handlePageChange,

    postsPerPage,
  };
};

export default UsePagination;
