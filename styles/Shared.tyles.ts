import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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
