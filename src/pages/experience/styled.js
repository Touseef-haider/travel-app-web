import styled from "styled-components";

export const Experience = styled.div`
  margin-top: 30px;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 20px;

  h1 {
    color: ${({ theme }) => theme.colors.grey};
    font-size: 20px;
    margin-bottom: 10px;
  }
  .images {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  .image-holder {
    box-shadow: rgb(0 0 0 / 16%) 0px 0px 3px 0px;
    width: 30%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    position: relative;
    margin-bottom: 10px;
  }
  .image-holder img {
    padding: 40px 10px;
  }
  .close-btn {
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
  .section {
    display: grid;
    padding: 40px;
    grid-template-columns: 4fr 1fr;
  }
  .album {
    padding: 10px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1) !important;
    margin: 10px;
    position: relative;
  }
  .story {
    padding: 10px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1) !important;
    margin: 10px;
    position: relative;
  }
  .edit {
    position: absolute;
    right: 40px;
    cursor: pointer;
  }
  .delete {
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
`;
