import React from 'react'
import { InitialFocus } from './InitialFocus'
import {Button} from '@chakra-ui/react'
import BasicModal from './BasicModal'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    let navigate=useNavigate();
    let handleClick=(e)=>{
      e.preventDefault();  
      localStorage.clear();
     navigate('/')
    }
  return (
    <div style={{width:'100%',display:'flex',justifyContent:'space-around',backgroundColor:'transparent'}}><BasicModal/> 
    <Button onClick={handleClick} backgroundColor='transparent' color='blue' fontSize='15px'>Logout</Button> </div>
  )
}

export default Navbar