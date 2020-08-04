import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

import "./Video.css";

function Video({
  url,
  channel,
  description,
  song,
  favoritedCount,
  messages,
  shares,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video_player"
        muted={true}
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar
        favoritedCount={favoritedCount}
        shares={shares}
        messages={messages}
      />
    </div>
  );
}

export default Video;
