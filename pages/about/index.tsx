import React from "react";
import CustomHead from "../../components/CustomHead";
import { SectionContainer, Description } from "../../styles/SharedStyles";

const About = () => {
  return (
    <>
      <CustomHead
        title="My Blog - About"
        description="  Welcome to my blog! Here, I share my thoughts on topics that excite
          me, from technology and programming to personal growth and creative
          pursuits."
      />
      <SectionContainer $textalign="center">
        <h2>About Me</h2>
        <Description>
          Welcome to my blog! Here, I share my thoughts on topics that excite
          me, from technology and programming to personal growth and creative
          pursuits.
        </Description>
        <Description>
          My goal is to inspire, educate, and connect with readers who are
          passionate about learning and exploring new ideas. Thank you for being
          a part of this journey!
        </Description>
      </SectionContainer>
    </>
  );
};

export default About;
