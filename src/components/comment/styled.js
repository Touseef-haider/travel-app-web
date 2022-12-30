import styled from "styled-components";

export const Comment = styled.div`
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
  .comment {
    margin-top: 35px !important;
    position: relative;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1) !important;
    padding: 10px;
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

  .edit-comment {
    position: absolute;
    cursor: pointer;
    right: 25px;
    top: 5px;
  }
  .delete-comment {
    position: absolute;
    cursor: pointer;
    right: 5px;
    top: 5px;
  }
`;
