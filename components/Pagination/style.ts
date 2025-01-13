import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.XS};
  margin-top: ${({ theme }) => theme.spacing.M};
`;

export const PaginationButton = styled.button<{ disabled?: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.XXS} ${theme.spacing.XS}`};
  font-size: ${({ theme }) => theme.fontSizes.small};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.disabled : theme.colors.primary};
  color: ${({ theme, disabled }) => (disabled ? theme.colors.text : "white")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border-radius: ${({ theme }) => theme.spacing.XXS};
  transition: transform 0.2s ease;

  &:hover {
    transform: ${({ disabled }) => (disabled ? "" : "scale(1.05)")};
  }
`;

export const InfoText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
