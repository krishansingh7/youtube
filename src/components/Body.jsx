import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className="flex h-screen overflow-y-hidden no-scrollbar text-white">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Body
