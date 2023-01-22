import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
  

import * as React from "react";
import DisplayTabs1 from './tabs.jsx';
import DisplayTabs2 from './tabs2.jsx';
import DisplayStars from './stars.jsx';

  export default function LeaveReview() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  
    return (
      <>
        <Button onClick={onOpen}>Leave a Review</Button>
        <AlertDialog
          motionPreset='slideInBottom'
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />
  
          <AlertDialogContent>
            <AlertDialogHeader>Leave a Review</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              Tell us what you think about this study building
              <br />
              <br />
              <strong>Accessibility:</strong>
              <br />
              <br />
              <DisplayTabs1/>
              <br />
              <br />
              <strong>Availability:</strong>
              <br />
              <br />
              <DisplayTabs2/>
              <br />
              <br />
              <strong>Overall Impression:</strong>
              <DisplayStars/>

            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='green' ml={3} onClick={onClose}>
                Confirm
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    )
  }