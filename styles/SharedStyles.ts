import styled from "styled-components";

interface SectionProps {
  $textalign: "center" | "left" | "right";
}
export const SectionContainer = styled.section<SectionProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: ${(props) => props.$textalign};
  padding: 5rem 0;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  max-width: 600px;
  margin: 2rem;
`;

export const SectionButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: ${({ theme }) => theme.spacing.small};
  cursor: pointer;
  margin-top: 2rem;
`;

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;
