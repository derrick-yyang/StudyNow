import {
    Flex,
    Box,
    chakra,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    ChakraBaseProvider,
    useToast,
    Center
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useAuth } from '../contexts/AuthContext'
  import { FcGoogle } from 'react-icons/fc';
  import { useNavigate, useLocation } from 'react-router-dom';

  
  export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate()
    const location = useLocation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const toast = useToast()
    const { register, signInWithGoogle } = useAuth()

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
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
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
                  register(email, password)
                    .then(res => handleRedirectToOrBack())
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
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input value={email} onChange={e => setEmail(e.target.value)} type="email" />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input value={password} onChange={e => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    isLoading={isSubmitting}
                    type='submit'
                    loadingText="Submitting"
                    size="lg"
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}>
                    Sign up
                  </Button>
                  <Button
                    w={'full'}
                    maxW={'md'}
                    variant={'outline'}
                    leftIcon={<FcGoogle />}
                    onClick={() =>
                      signInWithGoogle()
                        .then(user => handleRedirectToOrBack())
                        .catch(e => console.log(e.message))
                    }>
                    <Center>
                      <Text>Sign in with Google</Text>
                    </Center>
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={'center'}>
                    Already a user? <Link href="login" color={'blue.400'}>Login</Link>
                  </Text>
                </Stack>
              </chakra.form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }