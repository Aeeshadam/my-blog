import styled from "styled-components";

const SEARCH_MAX_WIDTH = "400px";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.S};
  width: 100%;
`;

export const SearchInput = styled.input`
  padding: ${({ theme }) => theme.spacing.XS};
  width: 100%;
  max-width: ${SEARCH_MAX_WIDTH};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.spacing.XS};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
    opacity: ${({ theme }) => theme.opacity.default};
  }
`;
