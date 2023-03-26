import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl } from '@mui/material';
import { Input ,FormLabel} from '@mui/material';

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({id}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

   
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [obj,setObj]=useState({
        "title":"",
        "status":"",
        "type":"",
        "sprint":""
    })

    const handle=async(event)=>{


        let res=await fetch(`https://attractive-underclothes-goat.cyclic.app/api/${id}`,{
            method:"POST",
            body:JSON.stringify(obj),
            headers:{
                "Content-Type":"application/json"
            }
        })

        setOpen(false);

    }
  

  return (
    <div>
      <Button onClick={handleOpen}>Create Task</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <FormControl>
                <FormLabel>Title name</FormLabel>
                <Input ref={initialRef} placeholder='Title name' onChange={(event)=>{

                   setObj({...obj,title:event.target.value})

                }} />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Status</FormLabel>
                <Input placeholder='Status' onChange={(event)=>{

                   setObj({...obj,status:event.target.value})

                }} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Type</FormLabel>
                <Input placeholder='Type' onChange={(event)=>{

                   setObj({...obj,type:event.target.value})

                }} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Sprint</FormLabel>
                <Input placeholder='Sprint' onChange={(event)=>{

                   setObj({...obj,sprint:event.target.value})

                }} />
                <Button colorScheme='blue' mr={3} onClick={handle}>
                         Assign
              </Button>
              </FormControl>
              
        </Box>
      </Modal>
    </div>
  );
}