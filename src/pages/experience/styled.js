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
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 20px;
  }
  .image-holder {
    box-shadow: rgb(0 0 0 / 16%) 0px 0px 3px 0px;
    display: flex;
    height: 30vh;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    position: relative;
    margin-bottom: 10px;
  }
  .image-delete-btn {
    position: absolute;
    right: 0;
    top: 0;
    padding: 3px;
    cursor: pointer;
  }
  .image-holder .image {
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.small}) {
    grid-template-columns: 1fr;
  }
`;
