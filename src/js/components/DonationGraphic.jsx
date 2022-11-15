import React, { useState, useEffect } from "react";
import DonationBar from "./DonationBar";
import dailyLogo from "../../images/donate/tmd-donate.jpg";
import lanternLogo from "../../images/donate/lantern-donate.jpg";

const DonationGraphic = () => {
  const [lanternMoney, setLanternMoney] = useState(0);
  const [dailyMoney, setDailyMoney] = useState(0);

  useEffect(() => {
    fetch("https://data.michigandaily.com/rivalry-edition-donations/2022.json")
      .then((response) => response.json())
      .then(({ lantern, daily }) => {
        setLanternMoney(Number(lantern));
        setDailyMoney(Number(daily));
      });
  }, []);

  return (
    <div className="graphic-container">
      <DonationBar
        organization="The Michigan Daily"
        amount={dailyMoney}
        color="rgb(40, 64, 100)"
      />
      <DonationBar
        organization="The Lantern"
        amount={lanternMoney}
        color="rgb(200, 56, 67)"
      />

      <div className="buttons-container">
        <div className="donation-button">
          <a
            href="https://maizeraise.umich.edu/o/university-of-michigan/i/maizeraise/s/tmd-lantern-rivalry-2022"
            target="_blank"
            rel="noreferrer"
          >
            <img src={dailyLogo} alt="The Michigan Daily logo" loading="lazy" />
          </a>
        </div>
        <div className="donation-button">
          <a
            href="https://buckeyefunder.osu.edu/project/34023"
            target="_blank"
            rel="noreferrer"
          >
            <img src={lanternLogo} alt="The Lantern logo" loading="lazy" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonationGraphic;
