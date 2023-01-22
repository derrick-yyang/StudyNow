import {
    Flex,
    Box,
    chakra,
    Stack,
    Heading,
    useColorModeValue
  } from '@chakra-ui/react';
import React from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function Profile() {
  const { currentUser } = useAuth()
  return (
    <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Profile Page</Heading>
            </Stack>
            <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
            <chakra.pre p={4}>
        {currentUser && <pre> {JSON.stringify(currentUser, null, 2)}</pre>}
    </chakra.pre>
            </Stack>
            </Box>
        </Stack>
    </Flex>
  )
}