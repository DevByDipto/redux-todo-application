import { deleteUser, selectUsers } from '@/redux/feature/user/userSlice'
import type { Iuser } from '@/type'
import React from 'react'
import { useDispatch } from 'react-redux'

const UserCard = ({user}:{user:Iuser}) => {
  const dispatch = useDispatch()
  
  return (
    <div className="border p-4 rounded shadow flex justify-between mt-3">
      <div>
       <h2>{user.name}</h2>
      </div>
      <div>
        <button onClick={()=>dispatch(deleteUser(user.id))}>delete</button>
      </div>
    </div>
  )
}

export default UserCard