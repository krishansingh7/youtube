// export const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
// console.log(process.env.REACT_APP_GOOGLE_API_KEY);
export const GOOGLE_API_KEY="AIzaSyC6nO-YAnggDgE8JYrRUpBk9K296tq7wJY";

export const RAPID_API_KEY = 'eec82a44cemsh2425210af47d7cfp11e804jsn19330de57152';

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_VIDEO_DATA_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=kgf&key="+GOOGLE_API_KEY;

export const YOUTUBE_MOST_POPULAR_VIDEOS_API = " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key="+GOOGLE_API_KEY;

export const YOUTUBE_MULTIPLE_VIDEOS_BY_ID_API ="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key="+GOOGLE_API_KEY;

export const RAPID_API = 'https://youtube138.p.rapidapi.com/auto-complete/'+RAPID_API_KEY;
