import styled from "styled-components";

export const PlacesNearMe = styled.div`
  .filter {
    width: 50%;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 150px;
    padding: 0 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.small}) {
    .filter {
      width: 80%;
      flex-wrap: wrap;
    }
  }
`;
