import {
    Flex,
    Box,
    chakra,
    Stack,
    Heading,
    useColorModeValue,
    Avatar, 
    AvatarBadge, 
    AvatarGroup,
    Text,
    Card,
    CardHeader,
    CardBody,
    Image,
    CardFooter,
    HStack,
    CircularProgress,
    CircularProgressLabel,
    Spacer,
    Progress,
  } from '@chakra-ui/react';
import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import badge1 from '../assets/badge1.png'
import badge2 from '../assets/badge2.png'

export default function Profile() {
  const { currentUser } = useAuth()
  return (
    <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        {/* <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
                <Heading fontSize={'4xl'}>Profile Page</Heading>
            </Stack>
            <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
                <Stack spacing={4}>
                    <Avatar name={currentUser.email} src='' />
                    <chakra.pre p={4}>
                        {currentUser && <pre> {JSON.stringify(currentUser, null, 2)}</pre>}
                    </chakra.pre>
                </Stack>
            </Box>
        </Stack> */}
        <Card w='lg'>
            <CardHeader w='100%' >
                {/* <Flex spacing='4'> */}
                <br></br>
                <br></br>
                <Stack alignItems='center'>
                    <Avatar bg='teal.500' size='2xl' name="Avatar Name" src='' />

                    <Box textAlign='center'>
                        <Heading size='md'>Avatar Name</Heading>
                        <Text>Level 8 Study Guide</Text>
                    </Box>
                </Stack>
                {/* <IconButton
                    variant='ghost'
                    colorScheme='gray'
                    aria-label='See menu'
                    icon={<BsThreeDotsVertical />}
                /> */}
                {/* </Flex> */}
            </CardHeader>
            <CardBody w='100%'>
                <Flex w='100%' direction="column" alignItems='center'>
                    <Flex w='100%' alignItems='center' textAlign='center'>
                        <Stack w='80%'>
                            <Box textAlign='center'>
                                <Text><strong>Waterloo</strong> Study Guide</Text>
                            </Box>
                            <Progress hasStripe value={64} color='blue.400'/>
                        </Stack>
                        <Text w='20%'><br></br>Level 2</Text>
                    </Flex>
                    <br></br>
                    <Flex w='100%' alignItems='center' textAlign='center'>
                        <Stack w='80%'>
                            <Box textAlign='center'>
                                <Text><strong>Quiet Room</strong> Study Guide</Text>
                            </Box>
                            <Progress hasStripe value={12} color='blue.400'/>
                        </Stack>
                        <Text w='20%'><br></br>Level 4</Text>
                    </Flex>
                    <br></br>
                    <Flex flexDirection='column' w='100%' alignItems='center' textAlign='center'>
                        <Heading size='md'>Badges</Heading>
                        <br></br>
                        <HStack>
                            <Avatar src={badge1} />
                            <Avatar src={badge2} />
                        </HStack>
                    </Flex>
                </Flex>
            </CardBody>

            <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                '& > button': {
                    minW: '136px',
                },
                }}
            >
                
            </CardFooter>
            </Card>
    </Flex>
  )
}