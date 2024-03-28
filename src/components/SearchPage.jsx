import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import { GOOGLE_API_KEY } from '../utils/constants';
import SearchVideos from './SearchVideos';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/redux/navSlice';
import { Link } from 'react-router-dom';

const SearchPage = () => {
  // useSearchVideoData();

  const dispatch = useDispatch();
  const {searchid} = useParams();

  const [searchData, setSearchData] = useState([])

  const getSearchVideo = async() => {
    const data = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&q="+searchid+"&key="+GOOGLE_API_KEY);
    const json = await data.json();
    console.log(json);
    setSearchData(json?.items)
  }

  useEffect(()=>{
    getSearchVideo();
    dispatch(closeMenu())
  },[])


  return (
    <div className="flex justify-center h-screen w-full flex-wrap overflow-y-scroll ">
      {
        searchData.map((item)=><Link key={item} to={"/watch?v="+item.id.videoId}><SearchVideos searchData={item} /></Link>)
      }
      
    </div>
  )
}

export default SearchPage