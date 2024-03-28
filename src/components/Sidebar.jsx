import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isOpenMenu = useSelector((store) => store.nav.isMenuOpen);

  // Early Returning
  if (!isOpenMenu) return null;

  // Remover => remove h-screen form sidebar

  return (
    <div className="hidden sm:text-slate-200 sm:w-[21vmax] sm:px-2 sm:shadow-xl sm:h-[calc(100vh-6.1vh)] sm:overflow-y-scroll sm:absolute sm:block sm:bg-black md:static ">
      <ul className="border-b-2 border-gray-400 sm:flex sm:flex-col sm:gap-1 md:gap-1 cursor-pointer sm:font-semibold sm:my-2 sm:ml-2 sm:truncate">
        <Link to="/">
          <li className="flex gap-5 items-center sm:h-[3vmax] p-2 hover:bg-[#242424] rounded-lg">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1.4em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path>
            </svg>
            <h2>Home</h2>
          </li>
        </Link>
        <Link to="/trending">
        <li className="flex gap-5 items-center h-[3vmax] p-2 hover:bg-[#242424] rounded-lg">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.4em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 12.9l-2.13 2.09c-.56.56-.87 1.29-.87 2.07C9 18.68 10.35 20 12 20s3-1.32 3-2.94c0-.78-.31-1.52-.87-2.07L12 12.9z"></path>
            <path d="M16 6l-.44.55C14.38 8.02 12 7.19 12 5.3V2S4 6 4 13c0 2.92 1.56 5.47 3.89 6.86-.56-.79-.89-1.76-.89-2.8 0-1.32.52-2.56 1.47-3.5L12 10.1l3.53 3.47c.95.93 1.47 2.17 1.47 3.5 0 1.02-.31 1.96-.85 2.75 1.89-1.15 3.29-3.06 3.71-5.3.66-3.55-1.07-6.9-3.86-8.52z"></path>
          </svg>
          <h2>Trending</h2>
        </li>
        </Link>
        <li className="flex gap-5 items-center h-[3vmax] p-2 hover:bg-[#242424] rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.4em"
            width="2em"
          >
            <path d="M7 8c0 2.76 2.24 5 5 5s5-2.24 5-5h-1c0 2.21-1.79 4-4 4s-4-1.79-4-4H7zm9.9-2c-.46-2.28-2.48-4-4.9-4S7.56 3.72 7.1 6H4v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6h-3.1zM12 3c1.86 0 3.43 1.27 3.87 3H8.13c.44-1.73 2.01-3 3.87-3zm7 17c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V7h14v13z"></path>
          </svg>
          <h2>Shoping</h2>
        </li>
        
          <li className="flex gap-5 items-center h-[3vmax] p-2 hover:bg-[#242424] rounded-lg">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1.4em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 8.95439L17.6352 7.82736C19.0102 7.55235 20 6.34501 20 4.94274C20 3.08637 18.3017 1.69406 16.4813 2.05813L12.4117 2.87206C11.0094 3.15252 10 4.38376 10 5.8138V13.8895C9.41165 13.5492 8.72857 13.3544 8 13.3544C5.79086 13.3544 4 15.1453 4 17.3544C4 19.5635 5.79086 21.3544 8 21.3544C10.2091 21.3544 12 19.5635 12 17.3544V8.95439ZM16.8736 4.01929L12.8039 4.83322C12.3365 4.92671 12 5.33712 12 5.8138V6.91479L17.2429 5.8662C17.6831 5.77816 18 5.39165 18 4.94274C18 4.34846 17.4563 3.90274 16.8736 4.01929ZM10 17.3544C10 16.2498 9.10457 15.3544 8 15.3544C6.89543 15.3544 6 16.2498 6 17.3544C6 18.459 6.89543 19.3544 8 19.3544C9.10457 19.3544 10 18.459 10 17.3544Z"
                fill="currentColor"
              ></path>
            </svg>
            <h2>Music</h2>
          </li>
       
        <li className="flex gap-5 items-center h-[3vmax] p-2 hover:bg-[#242424] rounded-lg">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1.4em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
            <line x1="7" y1="2" x2="7" y2="22"></line>
            <line x1="17" y1="2" x2="17" y2="22"></line>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <line x1="2" y1="7" x2="7" y2="7"></line>
            <line x1="2" y1="17" x2="7" y2="17"></line>
            <line x1="17" y1="17" x2="22" y2="17"></line>
            <line x1="17" y1="7" x2="22" y2="7"></line>
          </svg>
          <h2>Movies</h2>
        </li>
        <li className="flex gap-5 items-center h-[3vmax] p-2 hover:bg-[#242424] rounded-lg">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.4em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3a2 2 0 00-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8a2 2 0 00-2-2zm0 14H3V8h18v12zM9 10v8l7-4z"></path>
          </svg>
          <h2>Live</h2>
        </li>
        <li className="flex gap-5 items-center h-[3vmax] p-2 hover:bg-[#242424] rounded-lg">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1.4em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M478.07 356.88L439 151c-8.86-40.35-23-71-88-71H145c-66 0-79.14 30.65-88 71L18 356.88c-7 34.12 4.43 61.25 33.37 71.81S103 423 119.18 391.3l15.42-30.52a16 16 0 0114.28-8.78h198.28a16 16 0 0114.28 8.78l15.42 30.52c16.14 31.7 38.88 48 67.81 37.39S485 391 478.07 356.88zM224 240h-48v48h-32v-48H96v-32h48v-48h32v48h48zm68 4a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-20 20 20 0 01-20 20zm0-88a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-20 20 20 0 01-20 20z"></path>
          </svg>
          <h2>Gaming</h2>
        </li>
        <li className="flex gap-5 items-center h-[3vmax] p-2 hover:bg-[#242424] rounded-lg">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1.1"
            viewBox="0 0 16 16"
            height="1.4em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 4v-2h-14v11c0 0.552 0.448 1 1 1h13.5c0.828 0 1.5-0.672 1.5-1.5v-8.5h-2zM13 13h-12v-10h12v10zM2 5h10v1h-10zM8 7h4v1h-4zM8 9h4v1h-4zM8 11h3v1h-3zM2 7h5v5h-5z"></path>
          </svg>
          <h2>News</h2>
        </li>
        <li className="flex gap-5 items-center h-[3vmax] p-2 hover:bg-[#242424] rounded-lg">
          <svg
            stroke="currentColor"
            strokeWidth="0"
            fill="currentColor"
            viewBox="0 0 512 512"
            height="1.4em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M158.6 41l34.5 69.1L239.2 41zm114.2 0l46.1 69.1L353.4 41zM256 48.22L208.8 119h94.4zm-113.9.14L83.22 119h94.18zm227.8 0L334.6 119h94.2zM80.82 137L196.8 311H249l-63.4-174zm124.08 0L256 277.7 307.1 137zm121.5 0L263 311h52.2l116-174zM201 329v46h110v-46zm-67.8 64l-53.69 94H432.5l-53.7-94H183zm26.8 46h192v18H160z"></path>
          </svg>
          <h2>Sports</h2>
        </li>
        <li className="flex gap-5 items-center h-[3vmax] p-2 hover:bg-[#242424] rounded-lg">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.4em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.97308 18H11V13H13V18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM10 20V21H14V20H10ZM5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.624 15.7748 16 17 16 18.5V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.5C8 17 6.37458 15.7736 5.75395 14.9992Z"></path>
          </svg>
          <h2>Learning</h2>
        </li>
        <li className="flex gap-5 items-center h-[3vmax] p-2 hover:bg-[#242424] rounded-lg">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1.4em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M135.688 18.5c-6.798 74.842-23.842 85.39-107.907 59.656 84.85 52.022 73.57 64.954-6.843 96.938 87.743-10.27 103.29 4.89 70.75 87.594 17.805-27.56 32.5-44.498 46.282-54.47-11.813 28.26-18.345 59.274-18.345 91.813 0 84.184 43.71 157.96 109.656 200.376-41.624-43.834-67.686-102.7-67.686-167.875 0-134.923 109.45-244.405 244.375-244.405 30.92 0 60.76 5.762 88 16.25-38.584-26.87-85.517-42.625-136.064-42.625-55.257 0-106.14 18.802-146.562 50.375 4.627-18.783 17.39-38.073 41.03-60.906C190.18 90.942 153.53 95.634 135.69 18.5zm10.03 77.188c5.67.002 11.428 1.247 16.876 3.874 14.506 6.998 22.72 21.81 22 36.938-10.26 10.87-19.507 22.696-27.594 35.344-9.035 2.753-19.075 2.27-28.25-2.156-19.37-9.343-27.5-32.6-18.156-51.97 6.715-13.92 20.638-22.036 35.125-22.03z"></path>
          </svg>
          <h2>Fashion</h2>
        </li>
        <li className="flex gap-5 items-center h-[3vmax] p-2 hover:bg-[#242424] rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.4em"
            width="2em"
          >
            <path d="M6 12c0-3.31 2.69-6 6-6s6 2.69 6 6c0 1.66-.67 3.16-1.77 4.25l-.71-.71C16.44 14.63 17 13.38 17 12c0-2.76-2.24-5-5-5s-5 2.24-5 5c0 1.38.56 2.63 1.47 3.54l-.71.71C6.67 15.16 6 13.66 6 12zm8 0c0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72V22h2v-8.28c.6-.34 1-.98 1-1.72zm-9.06 7.08.71-.71C4.01 16.74 3 14.49 3 12c0-4.96 4.04-9 9-9s9 4.04 9 9c0 2.49-1.01 4.74-2.65 6.37l.71.71C20.88 17.27 22 14.77 22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 2.77 1.12 5.27 2.94 7.08z"></path>
          </svg>
          <h2>Podcast</h2>
        </li>
      </ul>
      {/* <ul className="p-2 cursor-pointer font-semibold border-b-2 my-2">
        <li>Music</li>
        <li>Gaming</li>
        <li>Sports</li>
        <li>Movies</li>
      </ul> */}
    </div>
  );
};

export default Sidebar;
