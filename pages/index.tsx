import React from "react";
import Link from "next/link";
import CustomHead from "../components/CustomHead";
import {
  SectionContainer,
  Description,
  SectionButton,
} from "../styles/SharedStyles";

const Home = () => {
  return (
    <>
      <CustomHead />
      <SectionContainer $textalign="center">
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
    </>
  );
};

export default Home;
