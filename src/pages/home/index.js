/* eslint-disable jsx-a11y/alt-text */
import * as S from "./styled";

import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import UnAuthLayout from "../../layouts/unAuthLayout";

const Home = () => {
  const navigate = useNavigate();

  return (
    <UnAuthLayout>
      <S.Home>
        <div className="video-section">
          <video autoPlay muted loop>
            <source src="https://static.pexels.com/lib/videos/free-videos.mp4"></source>
          </video>
          <div className="headings">
            <div>
              <span style={{ color: "#37b44e", fontWeight: "bold" }}>
                Travel App
              </span>
              <span style={{ color: "#fff", fontWeight: "bold" }}>
                {" "}
                helping to promote
              </span>
              <span style={{ color: "#37b44e", fontWeight: "bold" }}>
                {" "}
                Pakistan Tourism
              </span>
            </div>
            <h1
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: "larger",
                marginTop: "30px",
              }}
            >
              Let’s discover and explore new travel places in Pakistan with
              tourists as you.
            </h1>
          </div>
        </div>
        <div className="places-section">
          <div className="places">
            <h1>Travel Spaces</h1>
            <p>
              There were hidden gems we discovered for you to explore. New
              rewarding way to travel, explore & share
            </p>
          </div>
          <div className="places-image">
            <img
              height={500}
              src="https://www.pakrism.pk/static/media/place%20illustration-01.1ca8c058.svg"
            />
          </div>
        </div>

        <div className="places-section">
          <div className="places-image">
            <img
              height={400}
              src="https://www.pakrism.pk/static/media/map-01.7605cf39.svg"
            />
          </div>
          <div className="places">
            <h1>Mark your favorite and visited places</h1>
            <p>
              Drop your footprints on the map, and let the others know where you
              have traveled and will be.
            </p>
          </div>
        </div>
        <div className="places-section">
          <div className="places">
            <h1>Travel Stories</h1>
            <p>
              Travelers shared their mysterious travel stories, with love,
              experience and full of adventures.
            </p>
          </div>
          <div className="places-image">
            <img
              height={500}
              src="https://www.pakrism.pk/static/media/story_illustration-01.c700845d.svg"
            />
          </div>
        </div>
        <div className="experience-section">
          <div className="experience-card">
            <img
              width={100}
              height={100}
              src="https://www.pakrism.pk/static/media/question_illustration.a9efa886.svg"
            />
            <div>
              <h1>Could not find information you’re looking for?</h1>
              <p>
                Experienced tourists and explores are here to help you to make
                your trip the best.
              </p>
              <Button
                onClick={() => navigate("/experience")}
                title="Ask Question"
              />
            </div>
          </div>
        </div>
        <div className="experience-section">
          <div className="experience-card">
            <img
              width={100}
              height={100}
              src="https://www.pakrism.pk/static/media/question_illustration.a9efa886.svg"
            />
            <div>
              <h1>Travel Experiences, opinions and recommendations.</h1>
              <p>
                Browse hundreds of tourist experiences and reviews about travel
                places.
              </p>
              <Button
                onClick={() => navigate("/experience")}
                title="Share Experience"
              />
            </div>
          </div>
        </div>
      </S.Home>
    </UnAuthLayout>
  );
};

export default Home;
