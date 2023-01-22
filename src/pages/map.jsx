import Drawer from '../components/drawer.jsx';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
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

const mapStyles = {
    width: '100%',
    height: '1500%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={2}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: '[API KEY]'
})(MapContainer);

// export default function MapPage() {
//     return (
//       <Container maxW={'5xl'}>
//             <Drawer/>
//       </Container>
//     );
//   };

