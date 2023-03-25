import React, { useEffect, useState } from 'react'
 



import { getTasks } from '../../utils/api'


const Home = () => {
  const[state,setState]=useState([]);
  console.log(state);
  useEffect(()=>{
    getTasks().then(res=>{setState(res.task);console.log(res.data)})
  },[])
     
    
    return (
        <div>
            {
                state.map((ele,index)=>{
                  return <div style={{color:'white',border:'2px solid white',padding:'5px'}}>
                    <h1 >TITLE: {ele.title}</h1>
                     <h3>Status: {ele.status}</h3>
                     <h3>Sprint: {ele.sprint}</h3>
                  </div>
                })
            } 
        </div>
    )
}

export default Home