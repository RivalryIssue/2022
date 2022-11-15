import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "./components/Landing";
import Intro from "./components/Intro";
import DonationGraphic from "./components/DonationGraphic";
import SchoolVideos from "./components/SchoolVideos";
import ArticleGrid from "./components/ArticleGrid";
import data from "../data/copy.json";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Landing data={data} />
    <Intro description={data.homepage.description} />
    <DonationGraphic />
    <SchoolVideos />
    <ArticleGrid data={data} />
  </React.StrictMode>
);
