import React, { useState } from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import CustomHead from "../../components/CustomHead";
import Search from "../../components/Search";
import { SectionContainer } from "../../styles/SharedStyles";
import { PostsContainer, PostCard } from "./style";
import { getPosts } from "../../utils.api";
import { Post } from "../../types";

interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    setFilteredPosts(
      posts?.filter(
        (post) =>
          post.title.toLowerCase().includes(lowerCaseQuery) ||
          post.body.toLowerCase().includes(lowerCaseQuery)
      )
    );
  };

  return (
    <>
      <CustomHead title="My Blog - Posts" />
      <SectionContainer $textalign="left">
        <h2>Blog Posts</h2>
        <Search onSearch={handleSearch} />
        <PostsContainer>
          {!posts || filteredPosts.length === 0 ? (
            <p>No posts found at the moment</p>
          ) : (
            filteredPosts.map((post) => (
              <Link key={post.id} href={`/posts/${post.id}`}>
                <PostCard>
                  <h4>{post.title}</h4>
                  <p>{post.body}</p>
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
