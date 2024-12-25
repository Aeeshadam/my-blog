import React from "react";
import Link from "next/link";
import { SectionContainer } from "../../styles/SharedStyles";
import { PostsContainer, PostCard } from "./style";
import { getPosts } from "../../utils.api";
import { Post } from "../../types";

interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  if (posts.length === 0) {
    return (
      <SectionContainer textAlign="center">
        <p>No Posts Available at the moment</p>
      </SectionContainer>
    );
  }
  return (
    <SectionContainer textAlign="left">
      <h1>Blog Posts</h1>
      <PostsContainer>
        {posts.slice(0, 50).map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <PostCard>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </PostCard>
          </Link>
        ))}
      </PostsContainer>
    </SectionContainer>
  );
};

export async function getStaticProps() {
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
      posts: [],
      fallback: false,
    };
  }
}

export default Posts;
