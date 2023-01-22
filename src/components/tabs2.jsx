
import * as React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function DisplayTabs2() {
    return (
        <>
        <Tabs variant='soft-rounded' colorScheme='blue'>
        <TabList>
            <Tab>Plenty of Room</Tab>
            <Tab>Somewhat Busy</Tab>
            <Tab>Really Busy</Tab>
        </TabList>
        </Tabs>
        </>
            )
};



