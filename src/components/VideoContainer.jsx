import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { GOOGLE_API_KEY, YOUTUBE_VIDEOS_API } from "../utils/constants";
import { addVideos,addCategory } from "../utils/redux/videoSlice";
import { Link } from "react-router-dom";

const VideoContainer = () => {

  const dispatch = useDispatch();

  const {HomeVideos,category,categoryVideos} = useSelector(store => store?.videos)
  // console.log(category);

  const fetchSearchVideos = async() => {
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&q=${category}&regionCode=IN&key=${GOOGLE_API_KEY}`);
    const res = await data.json();
    dispatch(addVideos(res?.items));
    // dispatch(addCategory(res?.items));
  }

  const fetchVideosData = async() =>{
    const data = await fetch(`${YOUTUBE_VIDEOS_API}`);
    const res = await data.json();
    dispatch(addVideos(res?.items))
  }

  useEffect(()=>{
    if(category === "All"){
      fetchVideosData();
    }else{
      fetchSearchVideos();
    }

  },[category])

  return (
    <>
      <div className="flex justify-center h-screen flex-wrap no-scrollbar ">
      {HomeVideos && HomeVideos.length > 0 &&
        HomeVideos.map((video) => (
          <Link key={video.id} to={`/watch?v=${typeof video.id === 'object' ? video.id.videoId : video.id}`}>
          <VideoCard
            videoData={video}
          />
          </Link>
        ))}
    </div>
    </>
  );
};

export default VideoContainer;