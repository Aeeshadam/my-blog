import React from "react";
import {
  SectionContainer,
  Description,
  SectionButton,
} from "../styles/SharedStyles";
import Link from "next/link";

const Home = () => {
  return (
    <SectionContainer textAlign="center">
      <h1>Welcome to My Blog</h1>
      <Description>
        Dive into a collection of posts about topics I’m passionate
        about—ranging from technology to personal growth and everything in
        between. Explore, get inspired, and enjoy your stay!
      </Description>
      <Link href="/posts">
        <SectionButton>Explore Posts</SectionButton>
      </Link>
    </SectionContainer>
  );
};

export default Home;
