/* eslint-disable jsx-a11y/alt-text */
import * as S from "./styled";

import { useNavigate } from "react-router-dom";
import Logo from "../../assets/newLogo.png";
import i1 from "../../assets/1.jpg";
import i2 from "../../assets/2.jpg";
import i3 from "../../assets/3.jpg";
import t1 from "../../assets/travel-1.jpg";
import t2 from "../../assets/travel-2.jpg";
import t3 from "../../assets/travel-3.jpg";
import t4 from "../../assets/travel-4.jpg";
import u1 from "../../assets/user1.jpg";
import u2 from "../../assets/user2.jpg";
import u3 from "../../assets/user3.jpg";
import Button from "../../components/button";
import InputWithButton from "../../components/Input/inputWithButton";
import { useQuery } from "react-query";
import apiService from "../../services/apiService";

const Home = () => {
  const navigate = useNavigate();

  const { data } = useQuery("alerts", () => apiService.getExperiences());

  const alerts = data?.filter((d) => d?.category === "alert");
  console.log(alerts);

  return (
    <S.Home>
      <section className="banner">
        <header>
          <img
            width={100}
            style={{ backgroundColor: "transparent", marginTop: "-25px" }}
            height={100}
            src={Logo}
          />
          <Button
            onClick={() => navigate("/login")}
            style={{ borderRadius: "20px", padding: "0 25px" }}
            title="login"
          />
        </header>
        <h1 className="secondary text-center pt-150">
          Travel across the globe
        </h1>
        <div
          className="d-flex j-center search-input"
          style={{
            width: "50%",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          <InputWithButton
            // value=""
            placeholder="search locations"
            buttonTitle="Search"
          />
        </div>
      </section>
      <section className="destinations">
        <h1 className="text-center">Featured Destination</h1>
        <div className="cards">
          <div className="card">
            <div className="card-header">
              <img src={i1} />
              <div className="rating">897</div>
              <div className="rating-stars"></div>
            </div>
            <div className="card-body">
              <h2>Singapore</h2>
              <p>
                lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun
                lorem ipsun lorem ipsun lorem ipsun
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img src={i2} />
              <div className="rating">897</div>
              <div className="rating-stars"></div>
            </div>
            <div className="card-body">
              <h2>Karachi</h2>
              <p>
                lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun
                lorem ipsun lorem ipsun lorem ipsun
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img src={i3} />
              <div className="rating">897</div>
              <div className="rating-stars"></div>
            </div>
            <div className="card-body">
              <h2>Islamabad</h2>
              <p>
                lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun
                lorem ipsun lorem ipsun lorem ipsun
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="travelling">
        <h1 className="text-center"> Travelling gallery</h1>
        <div className="gallery">
          <div className="place">
            <img src={t1} />
            <h1 className="place-name">Islamabad</h1>
          </div>
          <div className="place">
            <img src={t2} />
            <h1 className="place-name">Karachi</h1>
          </div>
          <div className="place">
            <img src={t3} />
            <h1 className="place-name">Lahore</h1>
          </div>
          <div className="place">
            <img src={t4} />
            <h1 className="place-name">Pindi</h1>
          </div>
        </div>
      </section>
      <section className="top-dest">
        <div className="user-banner">
          <div
            className="d-flex j-space-around text-banner"
            style={{ padding: "0 200px" }}
          >
            <div className="text-center secondary">
              <h1 style={{ marginBottom: "10px" }}>
                Get 30% on top destinations
              </h1>
              <small>
                book your tickets before 1st jan and get 30% flat discount
              </small>
            </div>
            <div style={{ alignSelf: "flex-end" }}>
              <Button
                style={{ padding: "0 20px", borderRadius: "20px" }}
                title="Book"
              />
            </div>
          </div>
        </div>
      </section>
      <h1 className="text-center">Alerts</h1>
      <section className="alerts">
        {Array.isArray(alerts) &&
          alerts?.slice(0, 3).map((d) => (
            <div className="alert">
              <div className="alert-card">
                <div className="profile-photo">
                  {String(d?.profile?.first_name).charAt(0).toUpperCase()}{" "}
                  {String(d?.profile?.last_name).charAt(0).toUpperCase()}
                </div>
                <div className="details">
                  <span className="bold">
                    {d?.profile?.fast_name} {d?.profile?.last_name}
                  </span>
                  <span>posted at </span>
                  <span className="bold">Murree Islambad</span>
                </div>
              </div>
              <br />
              <p dangerouslySetInnerHTML={{ __html: d?.description }}></p>
            </div>
          ))}
      </section>
      {Array.isArray(alerts) && alerts.length > 3 && (
        <center>
          <Button
            style={{ marginBottom: "`10px" }}
            title="View more"
            onClick={() => navigate("/login")}
          />
        </center>
      )}
      <section className="reviews">
        <h1 className="text-center">User Reviews</h1>
        <div className="d-flex j-center reviews-card" style={{ gap: "30px" }}>
          <div className="user text-center">
            <img />
            <p>
              Lorems ispum Lorems ispum Lorems ispum Lorems ispum Lorems ispum
              Lorems ispum Lorems ispum Lorems ispum Lorems ispum Lorems ispum
              Lorems ispum Lorems ispum Lorems ispum Lorems ispum Lorems ispum
              Lorems ispum Lorems ispum Lorems ispum Lorems ispum Lorems ispum
              Lorems ispum Lorems ispum Lorems ispum{" "}
            </p>
            <h3>ABC DEF</h3>
            <small>Designer</small>
            <img className="client" src={u1} />
          </div>
          <div className="user text-center">
            <img />
            <p>
              Lorems ispum Lorems ispum Lorems ispum Lorems ispum Lorems ispum
              Lorems ispum Lorems ispum Lorems ispum Lorems ispum Lorems ispum
              Lorems ispum Lorems ispum Lorems ispum Lorems ispum Lorems ispum
              Lorems ispum Lorems ispum Lorems ispum Lorems ispum Lorems ispum
              Lorems ispum Lorems ispum Lorems ispum{" "}
            </p>
            <h3>ABC DEF</h3>
            <small>Designer</small>
            <img className="client" src={u2} />
          </div>
          <div className="user text-center">
            <img />
            <p>
              Lorems ispum Lorems ispum Lorems ispum Lorems ispum Lorems ispum
              Lorems ispum Lorems ispum Lorems ispum Lorems ispum Lorems ispum
              Lorems ispum Lorems ispum Lorems ispum Lorems ispum Lorems ispum
              Lorems ispum Lorems ispum Lorems ispum Lorems ispum Lorems ispum
              Lorems ispum Lorems ispum Lorems ispum{" "}
            </p>
            <h3>ABC DEF</h3>
            <small>Designer</small>
            <img className="client" src={u3} />
          </div>
        </div>
      </section>
      <footer>
        <div className="logo">
          <img src={Logo} style={{ marginTop: "-30px" }} />
          <p style={{ width: "300px" }}>This is travelling app</p>
        </div>
        <div className="features">
          <h3>Features</h3>
          <ul>
            <li>
              <a>Deals & Offers</a>
            </li>
            <li>
              <a>Customer Reviews</a>
            </li>
            <li>
              <a>Cancellation Policy</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Quick Contact</h3>
          <ul>
            <li>+92 3312924590</li>
            <li>touseefhaider355@gmail.com</li>
            <li>XYX Road,XYX Complex</li>
          </ul>
        </div>
        <div className="follow">
          <h3>Follow Us On</h3>
          <ul>
            <li>
              <a>Facebook</a>
            </li>
            <li>
              <a>Twitter</a>
            </li>
          </ul>
        </div>
      </footer>
    </S.Home>
  );
};

export default Home;
