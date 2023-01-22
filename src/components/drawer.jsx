import * as React from "react";
import Image from '../assets/location.png'; 
import portraitImage from '../assets/librarian.png';
import reviewImage from '../assets/star.png';
import ReactCardFlip from "react-card-flip";
import {useEffect, useState } from "react";
import LeaveReview from './alert.jsx'
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

function LeaveRating() {


}
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
                    <Card/>
                   <br />
                    <Button variant='outline' mr={3} onClick={() => setFlip(!flip)}>
                    See Study Spots </Button>
                    <br />
                </div>
                <div key="back">
                    <Card2/>
                    <br />
                    < Button  variant='outline' mr={3} onClick={() => setFlip(!flip)}>
                    Back</Button>
                    <br />
                </div>
            </ReactCardFlip>
            <br />
            <Box
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>     
                <Heading
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'2xl'}
                    fontFamily={'body'}>
                   Ratings:
                </Heading>    
                <Stack mt={6} direction={'row'} spacing={4} >
                <Avatar
                    src={reviewImage}
                    alt={'Author'}
                />
                <Stack direction={'column'} spacing={0} fontSize={'md'}>
                    <Text fontWeight={600}>Accessibility</Text>
                    <Text color={'gray.500'}>4/5</Text>
                </Stack>
                </Stack>   
                <Stack mt={6} direction={'row'} spacing={4} >
                <Avatar
                    src={reviewImage}
                    alt={'Author'}
                />
                <Stack direction={'column'} spacing={0} fontSize={'md'}>
                    <Text fontWeight={600}>Availability</Text>
                    <Text color={'gray.500'}>3/5</Text>
                </Stack>
                </Stack>                     
            </Box>
            <br />
            <LeaveReview/>
            <br />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Exit
              </Button>
              <Button colorScheme='blue'>Favourite</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

