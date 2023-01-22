import * as React from "react";
import Image from '../assets/location.png'; 
import portraitImage from '../assets/librarian.png';
import ReactCardFlip from "react-card-flip";
import {useEffect, useState } from "react";

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Button,
    DrawerCloseButton,
    Input,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Box,
    Center,
    Heading,
  } from '@chakra-ui/react'
import Card from "./card";
import Card2 from "./card2";

export default function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [flip, setFlip] = useState(false);
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay  />
          <DrawerContent w={'5000px'}>
            <DrawerCloseButton />
            <DrawerHeader>Campus Study Spot</DrawerHeader>
  
            <DrawerBody>
          
              <ReactCardFlip isFlipped={flip}
                flipDirection="horizontal">
                <div key="front">
                 
                    <button  onClick={() => setFlip(!flip)}>
                    <Card/></button>
                </div>
                <div key="back">
                   
                     <button  onClick={() => setFlip(!flip)}>
                     <Card2/></button>
                </div>
                
            </ReactCardFlip>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

