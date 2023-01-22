import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
    chakra,
    ChakraBaseProvider,
    Center
  } from '@chakra-ui/react';
  import { useState, useRef, useEffect } from 'react';
  import { useAuth } from '../contexts/AuthContext'
  import { useNavigate, useLocation } from 'react-router-dom';
  import { FcGoogle } from 'react-icons/fc';
  
  export default function SimpleCard() {
    const navigate = useNavigate()
    const location = useLocation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const toast = useToast()
    const { login, signInWithGoogle } = useAuth()

    function handleRedirectToOrBack() {
      navigate(location.state?.from ?? '/map', { replace: true })
    }

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
            <chakra.form
                onSubmit={async e => {
                  e.preventDefault()
                  if (!email || !password) {
                    toast({
                      description: 'Credentials not valid.',
                      status: 'error',
                      duration: 9000,
                      isClosable: true,
                    })
                    // return
                  }
                  setIsSubmitting(true)
                  login(email, password)
                    .then(res => {handleRedirectToOrBack()})
                    .catch(error => {
                      console.log(error.message)
                      toast({
                        description: error.message,
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                      })
                    })
                    .finally(() => setIsSubmitting(false))
                }}
              >
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input value={email} onChange={e => setEmail(e.target.value)} type="email" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                    <Checkbox>Remember me</Checkbox>
                    <Link color={'blue.400'}>Forgot password?</Link>
                  </Stack>
                  <Button
                    isLoading={isSubmitting}
                    type='submit'
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}>
                    Sign in
                  </Button>
                  <Button
                    w={'full'}
                    maxW={'md'}
                    variant={'outline'}
                    leftIcon={<FcGoogle />}
                    onClick={() =>
                      signInWithGoogle()
                        .then(user => {
                          handleRedirectToOrBack()
                          console.log(user)
                        })
                        .catch(e => console.log(e.message))
                    }>
                    <Center>
                      <Text>Sign in with Google</Text>
                    </Center>
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={'center'}>
                    Don't have an account? <Link href="signup" color={'blue.400'}>Sign Up</Link>
                  </Text>
                </Stack>
              </chakra.form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }