import * as React from "react";
import Image from '../assets/location.png'; 
import portraitImage from '../assets/star.png';
import {useEffect, useState } from "react";
import DropDown from './dropdown.jsx';

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

export default function Card2() {
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
                <Stack>
                <Text
                    color={'green.500'}
                    textTransform={'uppercase'}
                    fontWeight={800}
                    fontSize={'sm'}
                    letterSpacing={1.1}>
                    University of Waterloo
                </Text>
                <Text color={'gray.500'}>
                    Learn more about the Study spots offered here:
                </Text>
                <Heading
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'2xl'}
                    fontFamily={'body'}>
                    DC Library
                </Heading>
                <DropDown/>
                </Stack>
            </Box>
        </div>
        </>
    )
  }

