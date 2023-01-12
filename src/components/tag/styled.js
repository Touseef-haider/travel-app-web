import styled from "styled-components";

export const Tag = styled.span`
  background-color: ${({ color, theme }) =>
    color === "primary" ? theme.colors.primary : theme.colors.secondary};
  border: 1px solid
    ${({ color, theme }) =>
      color === "secondary" ? theme.colors.primary : "none"};
  padding: 10px;
  margin: 5px;
  border-radius: 20px;
  width: fit-content;
`;
