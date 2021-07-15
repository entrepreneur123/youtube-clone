import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function VideoCard({ image, title, channel, views, timestamp, ChannelImage }) {
  return (
    <div className="VideoCard">
      <img className="VideoCard__thumbnail" src={image} alt="" />
      <div className="VideoCard__info">
        <AccountCircleIcon
          className="videoCard__avatar"
          alt={channel}
          src={ChannelImage}
        />
        <div className="VideoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
