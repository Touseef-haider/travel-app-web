import styled from "styled-components";

export const PlacesNearMe = styled.div`
  .filter {
    width: 50%;
    margin-top: 20px;
    display: flex;
    gap: 20px;
    padding: 0 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.small}) {
    .filter {
      width: 80%;
      flex-wrap: wrap;
    }
  }
`;
