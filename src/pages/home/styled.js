import styled from "styled-components";

export const Home = styled.div`
  /* margin-top: 30px; */
  /* padding: 0 20px; */
  .video-section {
    position: relative;
  }
  video {
    width: 100%;
    opacity: 0.8;
  }
  .headings {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .headings span {
    font-size: 45px;
  }

  .headings .primary {
    color: ${({ theme }) => theme.colors.primary};
  }

  .headings .secondary {
    color: ${({ theme }) => theme.colors.primary};
  }

  .places-section {
    padding: 20px;
    /* Aligning the content in the center of the div. */
    /* height: 400px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .places-image {
    /* width: 100%; */
    height: 500px;
  }

  .places-section h1 {
    font-size: 60px;
  }
  .places-section p {
    font-size: 20px;
  }

  .experience-section {
    display: flex;
    justify-content: center;
  }

  .experience-card {
    padding: 40px 30px;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
    width: 50%;
    float: left;
    margin-bottom: 60px;
    background-color: #fff;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  h1 {
    color: ${({ theme }) => theme.colors.grey};
    font-size: 20px;
    margin-bottom: 10px;
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
    right: 10px;
    cursor: pointer;
  }
`;
