import React from "react";
import "../../css/landing.scss";
import tmdLogo from "../../images/logo/tmd-logo-white.png";
import lanternLogo from "../../images/logo/lantern-logo-white.png";

import dailyHelmet from "../../images/daily-helmet.png";
import lanternHelmet from "../../images/lantern-helmet.png";

const LandingPage = () => (
  <div id="landing">
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.25rem",
        position: "relative",
      }}
    >
      <div id="left-flag" />
      <div
        id="hero"
        style={{
          backgroundColor: "white",
          padding: "1rem",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontFamily: "Freshman",
            fontWeight: "normal",
            textAlign: "center",
          }}
        >
          The Rivalry
        </h1>
      </div>
      <div id="right-flag" />
    </div>
    <div id="logos">
      <a
        href="https://thelantern.com"
        target="_blank"
        rel="noreferrer"
        aria-label="The Lantern"
      >
        <img
          src={lanternLogo}
          alt="The Lantern logo"
          width="200px"
          height="auto"
        />
      </a>
      <span>&times;</span>
      <a
        href="https://michigandaily.com"
        target="_blank"
        rel="noreferrer"
        aria-label="The Michigan Daily"
      >
        <img
          src={tmdLogo}
          alt="The Michigan Daily logo"
          width="200px"
          height="27px"
        />
      </a>
    </div>
    <div id="lantern-helmet">
      <img
        src={lanternHelmet}
        alt="Ohio State football helmet with The Lantern logo"
      />
    </div>
    <div id="daily-helmet">
      <img
        src={dailyHelmet}
        alt="Michigan football helmet with The Michigan Daily logo"
      />
    </div>
    <a href="#main" type="button" className="chevron" aria-label="Scroll down">
      <svg
        aria-hidden="true"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        {/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
        <path
          fill="currentColor"
          d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM390.6 246.6l-112 112C272.4 364.9 264.2 368 256 368s-16.38-3.125-22.62-9.375l-112-112c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L256 290.8l89.38-89.38c12.5-12.5 32.75-12.5 45.25 0S403.1 234.1 390.6 246.6z"
        />
      </svg>
    </a>
  </div>
);

export default LandingPage;
