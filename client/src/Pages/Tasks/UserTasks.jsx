import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '../../Redux/Action';
import { getTasks } from '../../utils/api'
import {InitialFocus} from './InitialFocus';
import './usertask.css'
import {Button} from '@chakra-ui/react'


const UserTasks = () => {
    const[state,setState]=useState([]);
    const dispatch=useDispatch();

    const task=useSelector((e)=>e.tasks)
   
    useEffect(()=>{
     getTasks().then(res=>setState(res.task))
    },[])

  return (
    <div className='taskmain'>
      
        {/* <div><h1>USER DATA</h1> </div> */}
    <table className='tablemain' >
        <thead>
            <tr className='heading'>
                <th>Title</th>
                <th>Sprint</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {
                state.map((ele,index)=>{
                    return <tr key={index} style={{display:'flex',justifyContent:'space-around',marginTop:'10px'}}>
                        <td>{ele.title}</td>
                        <td>{ele.sprint}</td>
                        <td>{ele.status}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
    </div>
  )
}

export default UserTasks