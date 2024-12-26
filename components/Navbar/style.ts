import styled from "styled-components";

export const NavContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.medium};
  text-align: center;
  border-radius: ${({ theme }) => theme.spacing.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};

  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    gap: ${({ theme }) => theme.spacing.large};
  }
`;

export const NavItem = styled.li<{ isActive: boolean }>`
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.text};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
