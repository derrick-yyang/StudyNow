import Drawer from '../components/drawer.jsx';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
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
  // state = {
  //   showingInfoWindow: false,  // Hides or shows the InfoWindow
  //   activeMarker: {},          // Shows the active marker upon click
  //   selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  // };
  // onMarkerClick = (props, marker, e) =>
  // this.setState({
  //   selectedPlace: props,
  //   activeMarker: marker,
  //   showingInfoWindow: true
  // });

  // onClose = props => {
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //       activeMarker: null
  //     });
  //   }
  // };
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={16}
        style={mapStyles}
        initialCenter={
          {
            // Centre of UW
            lat: 43.471219, 
            lng: -80.543044
          }
        }
      >
        {/* Below is M3 */}
        <Marker 
          position={{ lat: 43.47330, lng: -80.54411}}
          onClick={()=>{console.log("click!")}}
        />
        <center>
            <Drawer/>
        </center>

        {/* Below is STC */}
        <Marker position={{ lat: 43.470837, lng: -80.54411}} /> 
        {/* Below is SLC */}
        <Marker position={{ lat: 43.47185265218329, lng: -80.54534359583154}} />  
        {/* Below is DC */}
        <Marker position={{ lat: 43.47291357044051, lng: -80.54269479945117}} />  
        {/* Below is E7 */}
        <Marker position={{ lat: 43.47304812731901, lng: -80.53952274900837}} />  
         
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: '<API-key>'
})(MapContainer);

// export default function MapPage() {
//     return (
//       <Container maxW={'5xl'}>
//             <Drawer/>
//       </Container>
//     );
//   };

