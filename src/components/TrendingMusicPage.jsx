import React from "react";
import { useEffect } from "react";
import TrendingMusicVideos from "./TrendingMusicVideos";
import { useState } from "react";
import { Link } from "react-router-dom";
import { closeMenu } from "../utils/redux/navSlice";
import { useDispatch } from "react-redux";

function TrendingMusicPage() {
  const [trending, setTrending] = useState([]);
  const dispatch = useDispatch();

  const url =
    "https://youtube-trending.p.rapidapi.com/trending?country=IN&type=music";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "eec82a44cemsh2425210af47d7cfp11e804jsn19330de57152",
      "X-RapidAPI-Host": "youtube-trending.p.rapidapi.com",
    },
  };

  const getData = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result);
      setTrending(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
    dispatch(closeMenu())
  }, []);


  return (
    <div className="w-fit h-screen overflow-y-scroll">
      <div className="mx-20 my-2">
        <h1 className="text-3xl font-bold">Trending</h1>
      </div>
      <div className="sm:flex sm:flex-col sm:justify-center sm:items-center md:flex md:justify-center md:h-screen md:flex-wrap no-scrollbar">
        {trending &&
          trending.map((data,index)=><Link to={"/watch?v="+data.videoId} ><TrendingMusicVideos key={index} trending={data} /></Link>)
        }
      </div>
    </div>
    // <div className="bg-red-300 grid grid-cols-4 overflow-y-scroll md:grid md:grid-cols-5 no-scrollbar">
    //     {trending &&
    //       trending.map((data,index)=><Link to={"/watch?v="+data.videoId} ><TrendingMusicVideos key={index} trending={data} /></Link>)
    //     }
    //   </div>
  );
}

export default TrendingMusicPage;
