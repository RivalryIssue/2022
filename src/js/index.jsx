import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "./components/Landing";
import Intro from "./components/Intro";
import DonationGraphic from "./components/DonationGraphic";
import SchoolVideos from "./components/SchoolVideos";
import ArticleGrid from "./components/ArticleGrid";
import copy from "../data/copy.json";
import articles from "../data/data.csv";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Landing data={copy} />
    <Intro description={copy.homepage.description} />
    <DonationGraphic />
    <SchoolVideos />
    <ArticleGrid data={articles} />
  </React.StrictMode>
);
