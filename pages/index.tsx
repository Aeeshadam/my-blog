import { FC } from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import { fetchEntries } from "../lib/utils/contentstack";
import CustomHead from "../components/CustomHead";
import {
  SectionContainer,
  Description,
  SectionButton,
} from "../styles/SharedStyles";

interface HomeProps {
  content: {
    title: string;
    description: string;
    button_url: string;
  };
}
const Home: FC<HomeProps> = ({ content }) => {
  return (
    <>
      <CustomHead />
      <SectionContainer $textAlign="center">
        <h1>{content.title}</h1>
        <Description>{content.description}</Description>
        <Link href={content.button_url}>
          <SectionButton>Explore Posts</SectionButton>
        </Link>
      </SectionContainer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const entries = await fetchEntries("home_page");
  if (!entries.length || entries.length === 0) {
    return {
      notFound: true,
    };
  }
  const content = entries[0];

  return {
    props: {
      content,
    },
  };
};

export default Home;
