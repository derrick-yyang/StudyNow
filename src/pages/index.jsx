import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
  } from '@chakra-ui/react';
  
  import mainImage from '../assets/techlife.png';
  import { Link } from "wouter"
  import { useAuth } from '../contexts/AuthContext';

  export default function Home() {
    const { currentUser } = useAuth()
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Finding Your {' '}
            <Text as={'span'} color={'blue.300'}>
              Ideal 
            </Text>{' '}
            Study Spot
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
          Our web app <strong>StudyNow</strong> is all about finding your ideal study spot on campus! Begin by going to our {" "}
          <a href="/about"><strong>Search</strong></a> page to find and compare study spots on campus near you.
    
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Link href="/map">
              <Button
                rounded={'full'}
                px={10}
                colorScheme={'blue'}
                bg={'blue.300'}
                _hover={{ bg: 'blue.200' }}>
                Search
              </Button>
            </Link>
            <Link href="info">
              <Button rounded={'full'} px={10} href="info">Learn more</Button>
            </Link>
          </Stack>
          <Flex w={'full'} align="center" justify="center">
            <img src = {mainImage}
              alt =""

            />
          </Flex>
        </Stack>
      </Container>
    );
  };