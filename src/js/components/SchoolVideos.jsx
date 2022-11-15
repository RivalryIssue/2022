import React from "react";

const SchoolVideos = () => (
  <div className="container">
    <div className="schoolVideoContainer">
      <div className="schoolVideo">
        <p className="schoolName">The Michigan Daily</p>
        <div className="player-wrapper">
          <iframe
            loading="lazy"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/oIs_KnbBD7g"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // eslint-disable-next-line react/no-unknown-property
            allowFullScreen
          />
        </div>
      </div>
      <div className="schoolVideo">
        <p className="schoolName">The Lantern</p>
        <div className="player-wrapper">
          <iframe
            loading="lazy"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/VTEqUF289pk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // eslint-disable-next-line react/no-unknown-property
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </div>
)


export default SchoolVideos;