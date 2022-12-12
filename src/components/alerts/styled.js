import styled from "styled-components";

export const Alerts = styled.div`
  width: 23%;
  /* z-index: 2; */
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.green};
  position: sticky;
  float: right;
  height: 100vh !important;
  right: 0;
  top: 20px;
`;
