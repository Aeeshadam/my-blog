import { useState, FC } from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import CustomHead from "../../components/CustomHead";
import Search from "../../components/Search";
import { getPosts } from "../../lib/utils/api";
import { Post } from "../../lib/types";
import { SectionContainer } from "../../styles/SharedStyles";
import { PostsContainer, PostCard } from "../../styles/PostStyle";

interface PostsProps {
  posts: Post[];
}

const Posts: FC<PostsProps> = ({ posts }) => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    setFilteredPosts(
      posts?.filter(
        ({ title, body }) =>
          title.toLowerCase().includes(lowerCaseQuery) ||
          body.toLowerCase().includes(lowerCaseQuery)
      )
    );
  };

  return (
    <>
      <CustomHead title="Posts" />
      <SectionContainer $textAlign="left">
        <h2>Blog Posts</h2>
        <Search onSearch={handleSearch} />
        <PostsContainer>
          {!posts || filteredPosts.length === 0 ? (
            <p>No posts found at the moment</p>
          ) : (
            filteredPosts.map(({ id, title, body }) => (
              <Link key={id} href={`/posts/${id}`}>
                <PostCard>
                  <h4>{title}</h4>
                  <p>{body}</p>
                </PostCard>
              </Link>
            ))
          )}
        </PostsContainer>
      </SectionContainer>
    </>
  );
};

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
  try {
    const initialPosts: Post[] = await getPosts();
    const posts = initialPosts.slice(0, 50);
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
