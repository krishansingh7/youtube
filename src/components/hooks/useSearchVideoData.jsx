import { useEffect } from 'react'
import { YOUTUBE_SEARCH_VIDEO_DATA_API } from '../../utils/constants'

const useSearchVideoData = () => {
  const getSearchVideo = async() => {
    const data = await fetch(YOUTUBE_SEARCH_VIDEO_DATA_API);
    const json = await data.json();
    console.log(json);
  }

  useEffect(()=>{
    // getSearchVideo();
  },[])
}

export default useSearchVideoData;