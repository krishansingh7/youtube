import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {

  return (
    <div className='overflow-y-scroll no-scrollbar w-full h-screen'>
      <ButtonList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer;