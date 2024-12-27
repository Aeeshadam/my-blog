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
  margin: ${({ theme }) => theme.spacing.small} auto;
`;

export const SectionButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: ${({ theme }) => theme.spacing.small};
  cursor: pointer;
  margin-top: ${({ theme }) => theme.spacing.medium};
`;

export const NotFoundContainer = styled(SectionContainer)`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  gap: ${({ theme }) => theme.spacing.small};

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
