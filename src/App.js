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

import { Router } from "wouter"
import PageRouter from "./components/router.jsx"
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <ChakraProvider theme={theme}>
          <Navbar />
          <PageRouter />
        </ChakraProvider>
      </Router>
    </AuthContextProvider>
    
  );
}

export default App;
