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
    margin-top: 5px;
    position: relative;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1) !important;
    padding: 10px;
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
