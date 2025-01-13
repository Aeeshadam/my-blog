import styled from "styled-components";

export const PostsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.XS};
  text-align: left;
`;

export const PostCard = styled.div`
  border-radius: ${({ theme }) => theme.spacing.XS};
  padding: ${({ theme }) => theme.spacing.XS};
  margin: ${({ theme }) => theme.spacing.XS} 0;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const PostBody = styled.p`
  margin-top: ${({ theme }) => theme.spacing.S};
  color: ${({ theme }) => theme.colors.text};
`;
