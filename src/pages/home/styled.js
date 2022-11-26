import styled from "styled-components";

export const Home = styled.div`
  margin-top: 30px;
  padding: 0 50px;
  h1 {
    color: ${({ theme }) => theme.colors.grey};
    font-size: 20px;
    margin-bottom: 10px;
  }
  .album {
    padding: 10px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1) !important;
    margin: 10px;
  }
  .story {
    padding: 10px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1) !important;
    margin: 10px;
  }
`;
