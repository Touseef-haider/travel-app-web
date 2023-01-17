import styled from "styled-components";

export const PlacesNearMe = styled.div`
  h3 {
    padding: 0 50px;
  }
  .filter {
    margin-top: 20px;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 150px);
    padding: 0 50px;
  }
  .filter > button {
    height: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.small}) {
    .filter {
      width: 80%;
      flex-wrap: wrap;
    }
  }
`;
