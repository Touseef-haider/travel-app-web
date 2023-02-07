import styled from "styled-components";

export const SinglePlace = styled.div`
  padding: 0 80px;
  .section {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 30px;
    margin-bottom: 20px;
  }
  .hotels {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 50px;
  }
  .hotel > * {
    padding: 10px !important;
  }
  .hotels p {
    padding: 10px;
  }
  .hotels h4 {
    margin-bottom: 5px;
  }
  .hotel {
    cursor: pointer;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1) !important;
    padding-bottom: 20px;
  }
  .hotel small {
    padding: 10px !important;
  }
  .hotel img {
    width: 100%;
    padding: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 200px;
  }
`;
