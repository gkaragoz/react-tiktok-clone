import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

import "./Video.css";

function Video() {
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
        src="https://v16m.tiktokcdn.com/cebdcf65962f9f3e0ff302c5c89ca2af/5f2ad6a9/video/tos/useast2a/tos-useast2a-pve-0068/50609ea2fbb24678a868927070fa3767/?a=1233&br=4156&bt=2078&cr=0&cs=0&dr=0&ds=3&er=&l=202008031556250101880612242720F7C3&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=amdrMzQ2bjt5djMzNDczM0ApZ2gzZGU5ZWRkNzRkOmQ5O2czYGVkXmdiZWNfLS1iMTZzc2M2Y2FhLmMxMzRjXjBjLmA6Yw%3D%3D&vl=&vr="
      ></video>
      <VideoFooter
        channel="gkaragoz"
        description="Seni seviyorum ıslın pırçısııığ. #lovelove"
        song="Usher - Yeah"
      />
      <VideoSidebar favoritedCount={175} shares={14} messages={5} />
    </div>
  );
}

export default Video;
