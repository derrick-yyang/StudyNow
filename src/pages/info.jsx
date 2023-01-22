import * as React from "react";
import {
    Box,
    VStack,
    Button,
    Flex,
    Divider,
    chakra,
    Grid,
    GridItem,
    Container,
} from '@chakra-ui/react';
import { } from '@chakra-ui/react';

interface FeatureProps {
    heading: string;
    text: string;
}

const Feature = ({ heading, text }: FeatureProps) => {
    return (
        <GridItem>
            <chakra.h3 fontSize="xl" fontWeight="600">
                {heading}
            </chakra.h3>
            <chakra.p>{text}</chakra.p>
        </GridItem>
    );
};

export default function Info() {
    return (
        <Box as={Container} maxW="7xl" mt={14} p={4}>
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(2, 1fr)',
                }}
                gap={4}>
                <GridItem colSpan={1}>
                    <VStack alignItems="center" spacing="20px">
                        <chakra.h2 fontSize="5xl" fontWeight="700">
                            📍 Your map to success.
                        </chakra.h2>
                        <div class="text-center">
                            <Button color='white' bg='blue.400' size="md">
                                Try It Now
                            </Button>
                        </div>
                        
                    </VStack>
                </GridItem>
                <GridItem>
                    <Flex>
                        <chakra.p>
                            It's hard to find the perfect spot on campus. [Name of our app]'s
                            mission is to make sure there is space for everyone. Our solution
                            brings students together by creating a community where users can
                            share their favourite study spots, check area vacancy, and accessibility. 
                        </chakra.p>
                    </Flex>
                </GridItem>
            </Grid>
            <Divider mt={12} mb={12} />
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(4, 1fr)',
                }}
                gap={{ base: '8', sm: '12', md: '16' }}>
                <Feature
                    heading={'Study Space Availability'}
                    text={'Reduce the time you spend looking for a spot.'}
                />
                <Feature
                    heading={'Interactive Map'}
                    text={'Access a Google Maps of your campus like never before.'}
                />
                <Feature
                    heading={'Discover Hidden Spots'}
                    text={'Users can add more study spaces if it doesn\'t already exist in our database.'}
                />
                <Feature
                    heading={'More Coming Soon'}
                    text={'Stay tuned for bigger and better things.'}
                />
            </Grid>
        </Box>
    );
}
