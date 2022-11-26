import styled from "styled-components";

export const Stories = styled.div`
  margin-top: 30px;
  padding: 0 150px;

  h1 {
    color: ${({ theme }) => theme.colors.grey};
    font-size: 20px;
    margin-bottom: 10px;
  }
`;
