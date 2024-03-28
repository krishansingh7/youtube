import React from "react";
import {generateRandomName} from "../utils/helper"

function ChatMessages({name,message}) {
  return (
    <div className="">
      <div className=" flex items-center px-4 py-2 m-1 ">
        <div className="flex items-center mr-1">
          <img
            src="https://avatars.githubusercontent.com/u/115705643?v=4"
            alt="chaticon"
            className="w-10 rounded-3xl mr-1"
          />
        </div>
        <div className="flex items-center flex-wrap w-[25vmax] ">
          <span className="opacity-70 mr-2">{name}</span>
          <h1>{message}</h1>
        </div>
      </div>
    </div>
  );
}

export default ChatMessages;
