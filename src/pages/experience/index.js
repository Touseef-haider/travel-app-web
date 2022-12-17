/* eslint-disable no-dupe-keys */
import AuthLayout from "../../layouts/authLayout";
import * as S from "./styled";
import apiService from "../../services/apiService";
import { useQuery } from "react-query";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Edit from "../../assets/edit.svg";
import Alerts from "../../components/alerts";
import { useState } from "react";

export const categories = [
  {
    value: "alert",
    item: "Alert",
  },
  {
    value: "album",
    item: "Share album",
  },
  {
    value: "story",
    item: "Share Story",
  },
  {
    value: "ask_questions",
    item: "Ask Questions",
  },
  {
    value: "share_experience",
    item: "Share Experience",
  },
];

const Experience = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const profile = useSelector((state) => state.auth?.user);
  const { data } =
    useQuery(["getExperience"], () => apiService.getExperiences()) || [];

  const getImage = (data) => {
    const str = `data:image/jpeg;base64,${btoa(
      String.fromCharCode(...new Uint8Array(data))
    )}`;
    return str;
  };

  const handleEdit = (id) => {
    console.log("clicked");
    navigate(`update-experience?id=${id}`);
  };

  return (
    <AuthLayout>
      <S.Experience>
        <Tabs selectedIndex={index} onSelect={(index) => setIndex(index)}>
          <TabList>
            {categories?.map((c) => (
              <Tab>{c?.item}</Tab>
            ))}
          </TabList>

          <TabPanel>
            <Alerts
              alerts={
                Array.isArray(data) &&
                data?.filter((i) => i?.category === "alert")
              }
              profile={profile}
            />
          </TabPanel>
          <TabPanel>
            <div className="album-section">
              <h1>Album</h1>
              {Array.isArray(data) &&
                data
                  ?.filter((i) => i?.category === "album")
                  .map((album) => (
                    <div className="album" key={album?.title}>
                      {album?.profile?._id === profile?._id ? (
                        <img
                          className="edit"
                          onClick={() => handleEdit(album?._id)}
                          src={Edit}
                          alt="edit"
                        />
                      ) : (
                        ""
                      )}

                      <label htmlFor="h1" className="label">
                        title:
                      </label>
                      <h1>{album?.title}</h1>
                      <label htmlFor="p" className="label">
                        description:
                      </label>
                      <p>{album?.description}</p>
                      <label htmlFor="p" className="label">
                        Category Name:
                      </label>
                      <p>{album?.category}</p>
                      {album?.files?.map((el) => (
                        <img width="300" src={getImage(el?.data)} alt="album" />
                      ))}
                    </div>
                  ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="story-section">
              <h1>Story</h1>

              {Array.isArray(data) &&
                data
                  ?.filter((i) => i?.category === "story")
                  .map((story) => (
                    <div className="story" key={story}>
                      {story?.profile?._id === profile?._id ? (
                        <img
                          className="edit"
                          onClick={() => handleEdit(story?._id)}
                          src={Edit}
                          alt="edit"
                        />
                      ) : (
                        ""
                      )}

                      <label htmlFor="h1" className="label">
                        story:
                      </label>
                      <p>{story?.description}</p>
                    </div>
                  ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="story-section">
              <h1>Ask Questions</h1>

              {Array.isArray(data) &&
                data
                  ?.filter((i) => i?.category === "ask_questions")
                  .map((question) => (
                    <div className="story" key={question}>
                      {question?.profile?._id === profile?._id ? (
                        <img
                          className="edit"
                          onClick={() => handleEdit(question?._id)}
                          src={Edit}
                          alt="edit"
                        />
                      ) : (
                        ""
                      )}

                      <label htmlFor="h1" className="label">
                        question:
                      </label>
                      <p>{question?.description}</p>
                    </div>
                  ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="story-section">
              <h1>Share Experience</h1>

              {Array.isArray(data) &&
                data
                  ?.filter((i) => i?.category === "share_experiece")
                  .map((experience) => (
                    <div className="story" key={experience}>
                      {experience?.profile?._id === profile?._id ? (
                        <img
                          className="edit"
                          onClick={() => handleEdit(experience?._id)}
                          src={Edit}
                          alt="edit"
                        />
                      ) : (
                        ""
                      )}

                      <label htmlFor="h1" className="label">
                        experience:
                      </label>
                      <p>{experience?.description}</p>
                    </div>
                  ))}
            </div>
          </TabPanel>
        </Tabs>
      </S.Experience>
    </AuthLayout>
  );
};

export default Experience;
