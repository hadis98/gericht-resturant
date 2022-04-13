import React, { useRef, useState } from "react";
import {
  BsFillPlayFill,
  BsPauseFill,
  BsPlay,
  BsPlayFill,
} from "react-icons/bs";

import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();
  const handleVideo = () => {
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
  };
  return (
    <div className="app__video">
      <video
        src={meal}
        type="video/mp4"
        ref={vidRef}
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={37} />
          ) : (
            <BsPlayFill color="#fff" fontSize={37} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
