import styled from "styled-components";

export const Alerts = styled.div`
  width: 100%;
  padding: 20px;
  position: sticky;
  float: right;
  height: 100vh !important;
  right: 0;
  top: 20px;
  .section {
    padding: 20px;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
    border-radius: 20px;

    margin: 10px;
    position: relative;
  }
  .story {
    padding: 20px;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
    border-radius: 20px;

    margin: 10px;
    position: relative;
  }
  .comment {
    margin-top: 5px;
    position: relative;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1) !important;
    padding: 10px;
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
