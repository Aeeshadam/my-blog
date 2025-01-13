import styled from "styled-components";

const CONTENT_MAX_WIDTH = "1200px";

export const Container = styled.div`
  max-width: ${CONTENT_MAX_WIDTH};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.S};
`;
