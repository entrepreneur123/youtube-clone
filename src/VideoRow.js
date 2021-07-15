import React from "react";
import "./VideoRow.css";

function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="VideoRow">
      <img src={image} alt="" />
      <div className="VideoRow__text">
        <h3>{title}</h3>
        <p className="VideoRow__headline">
          {channel} .
          <span className="videoRow__subs">
            <span classname="VideoRow__subsNumber">{subs} </span>
            Subscribers{" "}
          </span>
          {views} views . {timestamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
