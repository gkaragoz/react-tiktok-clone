import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

function VideoSidebar({ favoritedCount, shares, messages }) {
  const [hasFavorited, setHasFavorited] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar_button">
        {hasFavorited ? (
          <FavoriteIcon
            fontSize="large"
            onClick={() => {
              setHasFavorited(false);
            }}
          />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={() => {
              setHasFavorited(true);
            }}
          />
        )}
        <p>{hasFavorited ? favoritedCount + 1 : favoritedCount}</p>
      </div>
      <div className="videoSidebar_button">
        <MessageIcon fontSize="large" />
        <p>{shares}</p>
      </div>
      <div className="videoSidebar_button">
        <ShareIcon fontSize="large" />
        <p>{messages}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
