import React from "react";
import { Description, HomeContainer, Button } from "../styles/Home.styles";
import Link from "next/link";

const Home = () => {
  return (
    <HomeContainer>
      <h1>Welcome to My Blog</h1>
      <Description>
        Dive into a collection of posts about topics I’m passionate
        about—ranging from technology to personal growth and everything in
        between. Explore, get inspired, and enjoy your stay!
      </Description>
      <Link href="/posts">
        <Button>Explore Posts</Button>
      </Link>
    </HomeContainer>
  );
};

export default Home;
