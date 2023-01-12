import styled from "styled-components";

export const Corousel = styled.div`
  margin-top: 60px;

  .slider img {
    border-radius: 50%;
  }

  .dots {
    display: flex !important;
    justify-content: center !important;
    margin: 0 !important;
    padding: 1rem 0 !important;
    list-style-type: none !important;
  }

  .dots li {
    margin: 0 0.25rem;
  }

  .dots button {
    display: block;
    width: 0.65rem;
    height: 0.65rem;
    padding: 0;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 100%;
    background-color: #fff;
    text-indent: -9999px;
  }

  .dots li.slick-active button {
    background-color: ${({ theme }) => theme.colors.primary} !important;
  }
`;
