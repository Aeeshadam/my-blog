import { FC } from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import CustomHead from "../../components/CustomHead";
import Search from "../../components/Search";
import Pagination from "../../components/Pagination";
import UsePagination from "../../hooks/usePagination";
import useSearch from "../../hooks/useSearch";
import { getPosts } from "../../lib/utils/api";
import { Post } from "../../lib/types";
import { SectionContainer } from "../../styles/SharedStyles";
import { PostsContainer, PostCard } from "../../styles/PostStyle";

interface PostsProps {
  posts: Post[];
}

const Posts: FC<PostsProps> = ({ posts }) => {
  const { filteredPosts, handleSearch } = useSearch(posts);

  const {
    currentPosts,
    totalPages,
    handlePageChange,
    currentPage,
    postsPerPage,
  } = UsePagination(filteredPosts);

  const hasPosts = filteredPosts.length > 0;

  if (!hasPosts) {
    return (
      <>
        <CustomHead title="No posts found" />
        <SectionContainer $textAlign="left">
          <h2>Blog Posts</h2>
          <Search onSearch={handleSearch} />
          <p>No posts found at the moment</p>
        </SectionContainer>
      </>
    );
  }
  return (
    <>
      <CustomHead title="Posts" />
      <SectionContainer $textAlign="left">
        <h2>Blog Posts</h2>
        <Search onSearch={handleSearch} />
        <PostsContainer>
          {currentPosts.map(({ id, title, body }) => (
            <Link key={id} href={`/posts/${id}`}>
              <PostCard>
                <h4>{title}</h4>
                <p>{body}</p>
              </PostCard>
            </Link>
          ))}
        </PostsContainer>
        {filteredPosts.length > postsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </SectionContainer>
    </>
  );
};

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
  try {
    const posts = await getPosts();
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error("Error in getStaticProps", error);
    return {
      props: {
        posts: [],
      },
    };
  }
};

export default Posts;
