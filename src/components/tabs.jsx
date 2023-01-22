
import * as React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
export default function DisplayTabs1() {
    return (
        <>
        <Tabs variant='soft-rounded' colorScheme='blue'>
        <TabList>
            <Tab>Needs room for improvement</Tab>
            <Tab>Decent</Tab>
            <Tab>Great</Tab>
            <Tab>Excellent</Tab>
        </TabList>
        </Tabs>
        </>
            )
};



