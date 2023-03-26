import React, { useState } from "react"
import { Button,Modal, FormControl, FormLabel, Input, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"

export function InitialFocus({id}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
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

        onClose();

    }
  
    return (
      <>
        <Button  backgroundColor="green" bg="green" color="white" onClick={onOpen}>Assign task</Button>
        
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Assign Task</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
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
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handle}>
                         Assign
              </Button>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }