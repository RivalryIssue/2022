import React from 'react';
import ReactDOM from 'react-dom/client';
import ArticleGrid from "./components/ArticleGrid";
import DonationGraphic from "./components/DonationGraphic";
import Intro from "./components/Intro";
import LandingPage from "./components/LandingPage";
import SchoolVideos from './components/SchoolVideos';
import data from "../data/copy.json";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <LandingPage data={data} />
      <Intro description={data.homepage.description} />
      <DonationGraphic />
      <SchoolVideos />
      <ArticleGrid data={data} />
    </>
  </React.StrictMode>
);
