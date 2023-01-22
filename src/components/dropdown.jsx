import * as React from "react";

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,

  } from '@chakra-ui/react'

  
import {
    Box,
} from '@chakra-ui/react';


  export default function DropDown() {
    return (
      <>
       <Accordion allowToggle>
        <AccordionItem>
            <h2>
            <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                <Box>
                DC Library Main Floor
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            A mixture of silent and quiet study. Students can find themselves an independent study booth but also have access to all sorts of study rooms sitting 2-6 people. 
            <br />
            <br />
            <strong>Noise level: Quiet</strong>
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                <Box>
                DC Library Basement
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lots of large tables offered here. Perfect for group work. Single study booths also offered.
              <br />
              <br />
              <strong>Noise level: Loud</strong>
            </AccordionPanel>
        </AccordionItem>
        </Accordion>
      </>
    )
  }

