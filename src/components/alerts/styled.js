import styled from "styled-components";

export const Alerts = styled.div`
  width: 100%;
  padding: 20px;
  position: sticky;
  float: right;
  height: 100vh !important;
  right: 0;
  top: 20px;
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
