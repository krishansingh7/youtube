import React from 'react'
import { useDispatch } from 'react-redux';
import { setCategory } from '../utils/redux/videoSlice';

const listOFButton = ["All","Movies","Arijit Singh","Sidhu Moose Wala","Karan Aujla","Popular","Songs","Gaming","Coding","Discover","Comedy","Action","Cartoons","Nick","KGF","Avengers","RRR","295","Softly","NGO","Now","Dynamo","Heer","World","Other"];

const ButtonList = () => {
  const dispatch = useDispatch();

  const handleBtnSearch = (tag) => {
      dispatch(setCategory(tag))
  }

  return (
    <div className='flex overflow-x-scroll no-scrollbar ml-5 mb-[-6px]'>
        {
          listOFButton.map((btn,index)=>(
            <button key={index} onClick={()=>handleBtnSearch(btn)} className='flex  whitespace-nowrap items-center justify-center px-2 py-1 my-2 mx-1 bg-[#2e2e2e] rounded-md text-slate-200 font-semibold hover:bg-slate-200 hover:text-black'>{btn}</button>
          ))
        }
    </div>
  )
}

export default ButtonList;