import React from "react";
import { Link} from "react-router-dom";

const VideoCard = ({ videoData }) => {
  // console.log(videoData);
   const {snippet,statistics} = videoData;
  const {thumbnails, title, channelTitle } = snippet;

  return (
    <div className=" m-2 w-[18vmax] cursor-pointer ">
        <img
          className="rounded-lg"
          src={thumbnails?.medium?.url}
          alt="videoImg"
          
        />
        <h1 className="font-semibold">{title}</h1>
        <p>{channelTitle}</p>
        <span>{statistics?.viewCount} views</span>
    </div>
  );
};

export default VideoCard;
