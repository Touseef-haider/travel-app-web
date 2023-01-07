import styled from "styled-components";

import Banner from "../../assets/banner1.jpg";
import TopDest from "../../assets/banner2.jpg";

export const Home = styled.div`
  .banner {
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${Banner});
  }
  .banner header {
    width: 80%;
    padding: 20px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .destinations {
    padding-top: 50px;
    padding-bottom: 100px;
  }
  .destinations h1 {
    margin-bottom: 50px;
  }
  .cards {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
  .card {
    width: 25%;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1) !important;
  }
  .card img {
    width: 100%;
  }
  .card-header {
    position: relative;
  }
  .rating {
    position: absolute;
    bottom: -23px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 10px;
    width: 25px;
    height: 25px;
    padding: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.red};
  }
  .card-body {
    padding: 30px 10px;
  }
  .travelling {
    background-color: #efefef;
    padding-bottom: 150px;
  }
  .travelling h1 {
    padding-top: 100px;
    padding-bottom: 50px;
  }
  .gallery {
    padding: 0 120px;
    display: flex;
    gap: 30px;
    justify-content: center !important;
  }
  .place {
    border-radius: 30px;
    transform: scale(1);
    position: relative !important;
    cursor: pointer;
    transition: all ease 0.2s;
  }

  .place:hover {
    transform: scale(1.2);
  }
  .place-name {
    font-weight: 100;

    position: absolute;
    top: -40%;
    left: 50%;
    transform: translate(-50%, 0);
    color: ${({ theme }) => theme.colors.secondary};
    text-shadow: -1px 1px 1px #fff;
  }

  .place img {
    width: 100%;
    border-radius: 20px;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  }

  .top-dest {
    background-image: url(${TopDest});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 80vh;
    position: relative;
  }
  .user-banner {
    padding: 70px 0;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    text-align: center;
  }

  .alerts {
    display: grid;
    padding: 50px;
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }

  .alert {
    box-shadow: 0 0 10px 0 rgba(0, 0, 100, 0.2) !important;
    padding: 20px;
    margin-bottom: 15px;
  }

  .alert-card {
    display: flex;
    align-items: center;
  }

  .alert-card .profile-photo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: grey;
  }

  .alert-card .details {
    padding: 5px;
  }

  .reviews {
    height: 70vh;
    padding: 0 40px;
  }
  .reviews h1 {
    padding: 50px 0;
  }
  .reviews .user {
    position: relative;
    padding: 30px 10px 50px 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 100, 0.2) !important;
  }
  .user p {
    margin-bottom: 20px;
    position: relative;
  }
  .user p::before {
    content: '"';
    font-size: 55px;
    position: absolute;
    top: -40px;
    color: blue;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .user h3 {
    margin-bottom: 5px;
  }
  .user small {
    margin-bottom: 40px;
  }
  .user .client {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: -25px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  footer {
    background-image: linear-gradient(#2d557d, #9610fb);
    padding: 100px 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    bottom: 0;
    gap: 70px;
  }
  footer .logo img {
    width: 150px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  footer ul li {
    padding: 10px 0;
    font-size: small;
  }
  footer ul li a {
    cursor: pointer;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.small}) {
    .cards {
      flex-direction: column;
      padding: 20px;
    }
    .card {
      width: 100%;
    }
    .gallery {
      flex-direction: column;
    }
    .search-input {
      width: 90% !important;
    }
    .alerts {
      grid-template-columns: 1fr !important;
    }
    .text-banner {
      padding: 0 !important;
    }
    .reviews {
      padding: 0 20px !important ;
      height: auto !important;
      margin-bottom: 50px;
    }
    .reviews-card {
      flex-direction: column !important;
      gap: 50px;
    }
    footer {
      flex-direction: column !important;
      align-items: center !important;
      text-align: center;
      padding: 0 !important;
      gap: 10px !important;
    }
    footer .logo img {
      margin: 0 !important;
    }
    footer .logo p {
      text-align: center;
    }
  }
`;
