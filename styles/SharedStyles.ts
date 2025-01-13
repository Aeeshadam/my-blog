import styled from "styled-components";

const DESCRIPTION_MAX_WIDTH = "600px";
interface SectionProps {
  $textAlign: "center" | "left" | "right";
}
export const SectionContainer = styled.section<SectionProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: ${(props) => props.$textAlign};
  padding: ${({ theme }) => theme.spacing.XL} 0;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  opacity: ${({ theme }) => theme.opacity.default};
  max-width: ${DESCRIPTION_MAX_WIDTH};
  margin: ${({ theme }) => theme.spacing.XS} auto;
`;

export const SectionButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.XS};
  border: none;
  border-radius: ${({ theme }) => theme.spacing.XXS};
  cursor: pointer;
  margin-top: ${({ theme }) => theme.spacing.S};
`;

export const NotFoundContainer = styled(SectionContainer)`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  gap: ${({ theme }) => theme.spacing.XS};

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.small};

    &:hover {
      text-decoration: underline;
    }
  }
`;
