import styled from "styled-components";

export const ExperienceSection = styled.div`
  position: relative;
  .close-btn {
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
  .section {
    padding: 20px;
    position: relative;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
    margin: 50px 10px;
    border-radius: 10px;
  }
  .three-hor-dots {
    cursor: pointer;
    position: absolute;
    z-index: 2 !important;
    right: 20px;
    top: 20px;
    display: flex;
    gap: 2px;
  }
  .controls {
    position: absolute;
    padding: 10px;
    right: 0;
    display: flex;
    border-radius: 20px;
    top: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px !important;
  }

  .controls img {
    margin: 10px;
  }

  .three-hor-dots .point {
    width: 6px;
    height: 6px;
    background-color: grey;
    border-radius: 50%;
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
    bottom: 10px;
    left: 20px;
    z-index: 2 !important;
    /* border-radius: 50%; */
    /* background-color: transparent; */
    /* box-shadow: 0 0 5px 0 !important;   */
  }
  .liked-length {
    position: absolute;
    left: 40px;
    bottom: 5px;
  }
  .avatar {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }
  .profile-photo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: grey;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .gallery img {
    width: auto;
  }
`;
