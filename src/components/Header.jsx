import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/redux/navSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { FaMicrophone } from "react-icons/fa";
import ytLogo from "../assets/yt-logo.png";
import menuLogo from "../assets/m2.jpg";
import ytMobileLogo from "../assets/yt-logo-mobile.png"

const Header = () => {

  const dispatch = useDispatch();
  // For Toggle Menu
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const [search, setSearch] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [searchQuery, setSearchQuery] = useState([]);

  const getSuggestionData = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + search);
      const json = await data.json();
      setSearchQuery(json[1]);
    } catch (err) {
      console.log(err);
    }
  };

  // Implementing Debouncing 
  useEffect(() => {
    const timer = setTimeout(() => getSuggestionData(), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);


  return (
    <div className="grid p-2 static sm:grid grid-flow-col shadow-xl px-4 items-center">
      <div className="flex ml-2 col-span-1 items-center cursor-pointer">
        <img
          className="h-6 mr-4 ml-1"
          src={menuLogo}
          alt="menu"
          onClick={() => handleToggleMenu()}
        />
        <a href="/">
          <img
            className="hidden h-2 md:h-5 bg-[#0f0f0f] md:block"
            src={ytLogo}
            alt="youtube"
          />
          {/* <img src={ytMobileLogo} className="w-9 rounded-3xl md:hidden" /> */}
        </a>
      </div>
      <div className="flex sm:flex items-center justify-center col-span-8 text-center">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onBlur={() => setShowSuggestion(false)}
          onFocus={() => setShowSuggestion(true)}
          onChange={(e) => setSearch(e.target.value)}
          className="px-2 py-1 sm:px-4 sm:py-1 sm:w-4/6 rounded-l-3xl md:px-4 md:py-2 md:w-3/6 border-2 border-gray-700 outline-none bg-[#0f0f0f] text-white"
        />

        {showSuggestion && (
          <div className="hidden mt-14 ml-[-8%] rounded-md md:absolute md:w-[35%] md:block">
            <div className="absolute px-4 py-2 w-full bg-black rounded-md">
              {searchQuery.map((item) => (
                <p
                  key={item}
                  className="text-white py-2 text-left rounded-md cursor-pointer hover:bg-[#0f0f0f]"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        )}
        <a className="sm:my-2" href={`/search_results/${search}`}>
          <button className="px-2 py-1 sm:p-1 md:px-4 md:py-2 font-semibold border-2 border-gray-800 bg-[#181818] text-white rounded-r-3xl text-center items-center hover:bg-[#0f0f0f]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 512 512"
              className="text-white text-xl "
              height="1.2em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z"></path>
            </svg>
          </button>
        </a>
        <div className="hidden lg:flex justify-center items-center rounded-3xl cursor-pointer text-lg mx-2 w-10 h-10 bg-[#181818] hover:bg-[#0f0f0f]">
          <FaMicrophone />
        </div>
      </div>

      <div className="col-span-1 flex items-center justify-around">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="hidden lg:text-white text-xl cursor-pointer lg:block"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 4C16.5523 4 17 4.44772 17 5V9.2L22.2133 5.55071C22.4395 5.39235 22.7513 5.44737 22.9096 5.6736C22.9684 5.75764 23 5.85774 23 5.96033V18.0397C23 18.3158 22.7761 18.5397 22.5 18.5397C22.3974 18.5397 22.2973 18.5081 22.2133 18.4493L17 14.8V19C17 19.5523 16.5523 20 16 20H2C1.44772 20 1 19.5523 1 19V5C1 4.44772 1.44772 4 2 4H16ZM15 6H3V18H15V6ZM8 8H10V11H13V13H9.999L10 16H8L7.999 13H5V11H8V8ZM21 8.84131L17 11.641V12.359L21 15.1587V8.84131Z"></path>
        </svg>
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hidden lg:text-white text-xl cursor-pointer lg:block"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
        <img
          src="https://avatars.githubusercontent.com/u/115705643?v=4"
          className="hidden md:block sm:w-10 sm:rounded-3xl md:w-10 md:rounded-3xl"
        />
        <a href="/">
        <img src={ytMobileLogo} className=" w-9 rounded-3xl md:hidden" />
        </a>
      </div>
    </div>
  );
};

export default Header;
