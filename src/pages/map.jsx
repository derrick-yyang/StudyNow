import * as React from "react";
import Drawer from '../components/drawer.jsx';
import { Link } from "wouter";
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
    useDisclosure,
  } from '@chakra-ui/react';

export default function Map() {
    return (
      <Container maxW={'5xl'}>
            <Drawer/>
      </Container>
    );
  };
