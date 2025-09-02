import AddUserModal from '@/module/user/AddUserModal'
import UserCard from '@/module/user/UserCard'
import { selectUsers } from '@/redux/feature/user/userSlice'
import React from 'react'
import { useSelector } from 'react-redux'

const User = () => {
  const users = useSelector(selectUsers)
  return (
    <div>
      <div className='flex justify-between'>
        <h2>user</h2>
        <AddUserModal></AddUserModal>
      </div>
      <div>
        {users.map((user)=><UserCard user={user} key={user.id}></UserCard>)}
        
      </div>
    </div>
  )
}

export default User