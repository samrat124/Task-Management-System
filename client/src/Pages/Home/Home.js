import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
 



import { getTasks } from '../../utils/api'
import Login from '../Login/Login';


const Home = () => {
  const[state,setState]=useState([]);
  console.log(state);
  useEffect(()=>{
    // getTasks().then(res=>{setState(res.tasks);console.log(res.data)})
  },[])
     
    
    return (
        <div>
          
            <Login/>

            <ToastContainer
                className='toaster'
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <ToastContainer />
        </div>
    )
}

export default Home