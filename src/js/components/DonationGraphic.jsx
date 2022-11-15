import React, { useState, useEffect } from "react";
import DonationBar from "./DonationBar";
import dailyLogo from "../../images/donate/tmd-donate.jpg";
import lanternLogo from "../../images/donate/lantern-donate.jpg";

const DonationGraphic = () => {
  const [lanternMoney, setLanternMoney] = useState(0);
  const [dailyMoney, setDailyMoney] = useState(0);
  const [lastModified, setLastModified] = useState(null);

  useEffect(() => {
    fetch("https://data.michigandaily.com/rivalry-edition-donations/2022.json")
      .then((response) => {
        if (response.headers.has("Last-Modified")) {
          setLastModified(new Date(response.headers.get("Last-Modified")));
        }
        return response.json();
      })
      .then(({ lantern, daily }) => {
        setLanternMoney(Number(lantern));
        setDailyMoney(Number(daily));
      });
  }, []);

  return (
    <div className="graphic-container">
      <DonationBar
        organization="The Lantern"
        amount={lanternMoney}
        color="rgb(185, 54, 53)"
      />
      <DonationBar
        organization="The Michigan Daily"
        amount={dailyMoney}
        color="rgb(47, 65, 98)"
      />
      <div style={{ width: "100%" }}>
        <div
          style={{
            textAlign: "end",
            margin: "0 auto",
            padding: "0 1rem",
            boxSizing: "border-box",
            maxWidth: "900px",
          }}
        >
          Last updated: {lastModified !== null && lastModified.toLocaleString()}
        </div>
      </div>

      <div className="buttons-container">
        <div className="donation-button">
          <a
            href="https://buckeyefunder.osu.edu/project/34023"
            target="_blank"
            rel="noreferrer"
          >
            <img src={lanternLogo} alt="The Lantern logo" loading="lazy" />
          </a>
        </div>
        <div className="donation-button">
          <a
            href="https://maizeraise.umich.edu/o/university-of-michigan/i/maizeraise/s/tmd-lantern-rivalry-2022"
            target="_blank"
            rel="noreferrer"
          >
            <img src={dailyLogo} alt="The Michigan Daily logo" loading="lazy" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonationGraphic;
