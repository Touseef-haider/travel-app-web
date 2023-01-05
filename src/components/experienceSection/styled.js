import styled from "styled-components";

export const ExperienceSection = styled.div`
  .close-btn {
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
  .section {
    padding: 10px;
    position: relative;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1) !important;
    margin: 50px 10px;
  }

  .story {
    padding: 10px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1) !important;
    margin: 10px;
    position: relative;
  }
  .like {
    width: 25px;
    height: 25px;
    padding: 3px;
    cursor: pointer;
    position: absolute;
    bottom: -30px;
    left: 0px;
    z-index: 2 !important;
    border-radius: 50%;
    box-shadow: 0 0 5px 0 !important;
  }
  .liked-length {
    position: absolute;
    left: 40px;
    bottom: 0;
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
  .gallery {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    /* gap: 15px; */
  }
`;
