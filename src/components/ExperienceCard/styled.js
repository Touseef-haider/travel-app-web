import styled from "styled-components";

export const ExperienceCard = styled.div`
  .experience-section {
    padding: 20px 50px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .card {
    cursor: pointer;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1) !important;
  }
  .card h4 {
    margin-bottom: -5px;
    color: ${({ theme }) => theme.colors.primary};
  }
  .card small {
    font-size: 13px;
  }
  .card img {
    width: 100%;
    padding: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 200px;
  }
  .card > * {
    padding: 10px;
  }

  .detail {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.grey};
  }

  .symbol {
    margin: 10px;

    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .symbol img {
    width: 30px;
    height: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.small}) {
    .experience-section {
      padding: 10 !important;
      grid-template-columns: 1fr !important;
    }
  }
`;
