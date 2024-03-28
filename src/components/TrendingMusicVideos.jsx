import React from "react";

function TrendingMusicVideos({ trending }) {
  // console.log(trending);

  const {title,channelName,description,durationText,publishedText,videoId,views,thumbnails} = trending;

  return (
    <div className="">
      {/* "1st div" */}

      <div className=" mx-10 my-4 flex items-start justify-center cursor-pointer">
        <div className="mr-10">
          <img src={thumbnails[4]?.url} alt="yt" className="" />
        </div>
        <div>
          <div>
            <h1 className="text-xl">{title}</h1>
          </div>
          <div className="my-2">
            <span className="text-sm mr-2 opacity-80">{channelName}</span>
            <span className="text-sm mr-2 opacity-80">{views}</span>
            <span className="text-sm opacity-80">{publishedText}</span>
          </div>
          <div>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </div>

      {/* "2nd div" */}

      {/* <div className=" mx-10 my-2 flex items-start justify-center cursor-pointer">
        <div className="mr-10">
          <img
            className=""
            src="https://i.ytimg.com/vi/5ZKLM5pNoGQ/mqdefault.jpg"
            alt="yt"
          />
        </div>
        <div>
          <div>
            <h1 className="text-xl">
              Drippy Official Video | Sidhu Moose Wala | Mxrci | AR Paisley
            </h1>
          </div>
          <div className="my-2">
            <span className="text-sm mr-2 opacity-80">Sidhu Moose Wala</span>
            <span className="text-sm mr-2 opacity-80">14M views</span>
            <span className="text-sm opacity-80">6 days ago</span>
          </div>
          <div>
            <p className="text-sm opacity-80">
              Sidhu Moose Wala presents Official Video for DRIPPY Song Name -
              Drippy Artist - Sidhu Moose Wala, Mxrci, AR Paisley Lyricist -
              Sidhu Moose Wala, AR Paisley Composer - Sidhu Moose Wala Music...
            </p>
          </div>
        </div>
      </div> */}
    </div>

    //  Original comp.

    //        <div className="m-2 w-[18vmax] cursor-pointer ">
    //     <img src={thumbnails[4]?.url} alt="yt" className="" />
    //      <h1 className="font-semibold">{title}</h1>
    //      <p>{channelName}</p>
    //      <span>{views} views</span>
    //  </div>
  );
}

export default TrendingMusicVideos;
