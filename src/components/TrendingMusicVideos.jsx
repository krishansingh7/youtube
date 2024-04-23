import React from "react";

function TrendingMusicVideos({ trending }) {

  const {title,channelName,description,durationText,publishedText,videoId,views,thumbnails} = trending;

  return (
      <div className=" mx-10 my-3 sm:my-4 flex items-start justify-center cursor-pointer">
        <div className="mr-10">
          <img src={thumbnails[4]?.url} alt="yt" className="w-[60vmax] sm:w-[25vmax] md:w-[20vmax] " />
        </div>
        <div>
          <div>
            <h1 className="text-xl">{title}</h1>
          </div>
          <div className="my-2 hidden md:block">
            <span className="text-sm mr-2 opacity-80">{channelName}</span>
            <span className="text-sm mr-2 opacity-80">{views}</span>
            <span className="text-sm opacity-80">{publishedText}</span>
          </div>
          <div>
            <p className="text-sm hidden md:block">{description}</p>
          </div>
        </div>
      </div>
  );
}

export default TrendingMusicVideos;
