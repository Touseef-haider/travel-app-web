/* eslint-disable no-dupe-keys */
import AuthLayout from "../../layouts/authLayout";
import * as S from "./styled";
import apiService from "../../services/apiService";
import { useQuery } from "react-query";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useSelector } from "react-redux";
import Alerts from "../../components/alerts";
import { useState } from "react";
import PostExperience from "../../components/postExperience";
import { useMutation } from "react-query";
import ExperienceSection from "../../components/experienceSection";

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
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([]);

  const profile = useSelector((state) => state.auth?.user);
  const { data, refetch } =
    useQuery(["getExperience", index], () => apiService.getExperiences()) || [];

  const deleteMutation = useMutation(
    "deleteExp",
    (data) => apiService.deleteExperience(data),
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  return (
    <AuthLayout>
      <S.Experience>
        <Tabs
          style={{ padding: "0 50px" }}
          selectedIndex={index}
          onSelect={(index) => setIndex(index)}
        >
          <TabList>
            {categories?.map((c) => (
              <Tab>{c?.item}</Tab>
            ))}
          </TabList>

          <TabPanel>
            <Alerts
              filterBy="alert"
              deleteMutation={deleteMutation}
              key="album"
              profile={profile}
              data={data}
              refetch={refetch}
            />
          </TabPanel>
          <TabPanel>
            <ExperienceSection
              filterBy="album"
              deleteMutation={deleteMutation}
              key="album"
              profile={profile}
              data={data}
              refetch={refetch}
            />
          </TabPanel>
          <TabPanel>
            <ExperienceSection
              filterBy="story"
              deleteMutation={deleteMutation}
              key="story"
              profile={profile}
              data={data}
              refetch={refetch}
            />
          </TabPanel>
          <TabPanel>
            <ExperienceSection
              filterBy="ask_questions"
              deleteMutation={deleteMutation}
              key="ask_question"
              profile={profile}
              data={data}
              refetch={refetch}
            />
          </TabPanel>
          <TabPanel>
            <ExperienceSection
              filterBy="share_experience"
              deleteMutation={deleteMutation}
              key="share_experience"
              profile={profile}
              data={data}
              refetch={refetch}
            />
          </TabPanel>
        </Tabs>
        <PostExperience
          images={images}
          setImages={setImages}
          handleFetch={refetch}
        />
      </S.Experience>
    </AuthLayout>
  );
};

export default Experience;
