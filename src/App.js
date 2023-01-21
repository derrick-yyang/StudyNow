import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Home from './pages';
import Navbar from './components/navbar.jsx';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      <Home />
    </ChakraProvider>
  );
}

export default App;
