import React from "react";
import ReactPlayer from "react-player";

function Video() {
  return (
    <div className="w-screen h-screen py-10">
      <ReactPlayer
        url="/images/B16_Coulisses.mp4"
        controls
        playing
        width="100%"
        height="100vh"
      />
    </div>
  );
}

export default Video;
