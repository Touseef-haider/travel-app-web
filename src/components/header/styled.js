import styled from "styled-components";

export const Header = styled.div`
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1) !important;
  header {
    width: 80%;
    background-color: #fff;
    display: flex;
    padding: 10px 20px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
  }
  h1 {
    padding: 10px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
    cursor: pointer;
  }
`;
