import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import CustomHead from "../../components/CustomHead";
import { SectionContainer } from "../../styles/SharedStyles";
import { Post } from "../../types";
import { getPostById, getPosts } from "../../utils.api";
import { PostBody } from "./style";

interface PostProps {
  post: Post;
}

const PostPage: React.FC<PostProps> = ({ post }) => {
  return (
    <>
      <CustomHead title={post.title} description={post.body} />
      <SectionContainer $textalign="left">
        <article>
          <h3>{post.title}</h3>
          <PostBody>{post.body}</PostBody>
        </article>
      </SectionContainer>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const posts = await getPosts();
    const paths = posts?.slice(0, 50).map((post) => ({
      params: { id: post.id.toString() },
    }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error in getStaticPaths", error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  try {
    const post = await getPostById(id);
    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error("Error in getStaticProps", error);
    return {
      notFound: true,
    };
  }
};

export default PostPage;
