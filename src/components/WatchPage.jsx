import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/redux/navSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParam] = useSearchParams();
    // console.log(searchParam.get("v"));
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="w-screen overflow-y-scroll no-scrollbar overflow-x-hidden flex mt-6 justify-between sm:grid sm:grid-cols-1 lg:flex">
      <div className="flex flex-col items-center mx-3">
        <div className="">
          <iframe width="700px" height="450px"  src={"https://www.youtube.com/embed/" + searchParam.get("v")+"?autoplay=1"}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
        <div className="w-[90%] p-4 rounded-lg border-2 border-white">
          <h1>Comments Section</h1>
        </div>
      </div>
      <div className="mr-2 lg:w-[calc(100%-700px)]">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
