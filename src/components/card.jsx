import * as React from "react";
import Image from '../assets/location.png'; 
import portraitImage from '../assets/librarian.png';
import {useEffect, useState } from "react";

import {
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

export default function Card() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [flip, setFlip] = useState(false);
  
    return (
      <>
        <div>
            <Box
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Box
                h={'210px'}
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={6}
                pos={'relative'}>
                <img
                    src={Image}
                /> 
                </Box>
                <Stack>
                <Text
                    color={'green.500'}
                    textTransform={'uppercase'}
                    fontWeight={800}
                    fontSize={'sm'}
                    letterSpacing={1.1}>
                    University of Waterloo
                </Text>
                <Heading
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'2xl'}
                    fontFamily={'body'}>
                    DC Library
                </Heading>
                
                <Text color={'gray.500'}>
                    The Davis Centre Library is divided into three zones that are colour-coded beige (silent study zone), 
                    green (quiet study zone), and grey (group study zone).
                </Text>
                
                </Stack>
                <Stack mt={6} direction={'row'} spacing={4} >
                <Avatar
                    src={portraitImage}
                    alt={'Author'}
                />
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                    <Text fontWeight={600}>Librarian Mrs. Kelly</Text>
                    <Text color={'gray.500'}>415-233-3412 · Mon-Fri</Text>
                </Stack>
                </Stack>  
            </Box>
        </div>
        </>
    )
  }

