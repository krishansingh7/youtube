import React, { useState } from 'react'
import ChatMessages from './ChatMessages'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessages } from '../utils/redux/chatSlice';
import { generateRandomName, makeRandomMessages } from '../utils/helper';

const LiveChat = () => {

    const dispatch = useDispatch();

    const chatMsgData = useSelector((store)=> store.chat.Messages)

    const [livemsg, setLiveMsg] = useState("");

    useEffect(()=>{
        const a = setInterval(()=>{
            dispatch(addMessages({
                name: generateRandomName(),
                message: makeRandomMessages(10),
            }))
        },1000)
        return ()=>{
            clearInterval(a);
        }
    },[])

  return (
    <div className=" h-[36vmax] flex flex-col border-2 border-white ">
      <div className="my-2 p-2 border-b-2 w-full">
        <h1>Live Chat</h1>
      </div>
      <div className="overflow-y-scroll h-screen no-scrollbar flex flex-col-reverse">
        {chatMsgData.map((data, index) => (
          <ChatMessages key={index} name={data.name} message={data.message} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessages({
              name: "Krishan Singh",
              message: livemsg,
            })
          );
          setLiveMsg("")
        }}
      >
        <div className="mt-4 w-full flex items-center justify-center border-t-2 p-2 font-semibold text-lg">
          <input
            type="text"
            value={livemsg}
            placeholder="Enter Your Message"
            className="text-black w-4/6 px-4 py-2 outline-none rounded-md mr-2"
            onChange={(e) => {
              setLiveMsg(e.target.value);
            }}
            
          />
          <button className="px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default LiveChat;