import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Signup from '../Pages/Signup/Signup'
import UserTasks from '../Pages/Tasks/UserTasks'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/tasks' element={<UserTasks/>}/>
        </Routes>
    </div>
  )
}

export default Allroutes