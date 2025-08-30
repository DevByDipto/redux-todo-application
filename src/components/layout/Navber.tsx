import React from 'react'
import { Link } from 'react-router'
import { ModeToggle } from '../mode-toggle'

const Navber = () => {
  return (
    <div className='max-w-7xl mx-auto flex justify-between items-center h-16 px-5 font-bold'>
        <Link to="/">logo</Link>
       <div>
        <Link to="/user" className='ml-5'>User</Link>
       <Link to="/task" className='ml-5'>Task</Link>
       </div>
       <div>
        <ModeToggle></ModeToggle>
       </div>
    </div>
  )
}

export default Navber