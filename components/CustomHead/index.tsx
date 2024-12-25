import React from "react";
import Head from "next/head";

interface CustomHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const CustomHead: React.FC<CustomHeadProps> = ({
  title = "My Blog",
  description = "Explore insightful posts",
  keywords = "blog, posts, articles",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  );
};

export default CustomHead;
