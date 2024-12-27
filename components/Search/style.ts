import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.medium};
  width: 100%;
`;

export const SearchInput = styled.input`
  padding: 1rem;
  width: 100%;
  max-width: 400px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.spacing.small};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
    opacity: 0.7;
  }
`;
