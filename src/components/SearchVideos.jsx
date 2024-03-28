import React from 'react'

const SearchVideos = ({searchData}) => {
    
    const {snippet} = searchData; 
    const {thumbnails, title, channelTitle} = snippet;

    if(!searchData) return;

  return (
    <div className=" w-[18vmax] m-2 cursor-pointer ">
        <img
          className="rounded-lg"
          src={thumbnails?.medium?.url}
          alt="videoImg"
        />
        <h1 className="font-semibold">{title}</h1>
        <p>{channelTitle}</p>
    </div>
  )
}

export default SearchVideos