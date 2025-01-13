import styled from "styled-components";

export const NavContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.S};
  text-align: center;
  border-radius: ${({ theme }) => theme.spacing.S};
  border: 1px solid ${({ theme }) => theme.colors.border};

  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    gap: ${({ theme }) => theme.spacing.L};
  }
`;

export const NavItem = styled.li<{ $isActive: boolean }>`
  cursor: pointer;
  transition: color 0.2s ease;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.text};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
