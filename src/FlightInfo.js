import * as React from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons'

import {
    Grid,
    GridItem,
    Text,
    ButtonGroup,
    Button,
    IconButton,
    Flex
} from '@chakra-ui/react'
function FlightInfo() {
    return (
        <>
            {/* Main grid container */}
            <Grid templateRows='repeat(2, 1fr)'
                templateColumns='100px 996px'
                gap={4}
                w='full'
                pl={8}
                
            >
                {/* Header */}
                <GridItem colStart={2} colEnd={-1}>
                    <Grid
                        templateColumns='333px 295px 180px 188px'
                        color='#474A51'
                    >
                        <GridItem>
                            <Text>Company</Text>
                        </GridItem>
                        <GridItem>
                            <Text>Schedule</Text>
                        </GridItem>
                        <GridItem>
                            <Text>Price start from</Text>
                        </GridItem>
                    </Grid>
                </GridItem>
                {/* Side */}
                <GridItem rowStart={2} rowEnd={3}>
                    <Text color='#474A51'>Non-stop</Text>
                </GridItem>
                {/* Flight info */}
                <GridItem colStart={2} colEnd={-1}
                    bgColor='#FFFFFF'
                    color='#474A51'
                    borderRadius='8px'
                    h='74px'>
                    <Grid alignItems='baseline'
                        templateColumns='333px 295px 180px 188px'
                        color='#474A51'
                        fontWeight='600'
                    >
                        <GridItem>
                            <Text>El-Al Israel Airlines</Text>
                        </GridItem>
                        <GridItem alignItems='baseline'>
                            <Flex w='212px' alignItems='baseline'>
                            <Text pr='16px'>14:20; 20:45</Text>
                            <Button type='button' w='24px'><Text>+3</Text></Button>
                            </Flex>
                        </GridItem>
                        <GridItem>
                            <Text>> $550</Text>
                        </GridItem>
                        <GridItem>
                           <ButtonGroup>
                                <IconButton type='button'
                                    aria-label='Show more info'
                                    bgColor='#F2F2F2'
                                    icon={<ChevronDownIcon color='#2D3748'/> }/>
                            <Button type='button' color='#FFFFFF' h='42px' w='124px' bgColor='#7B61FF' borderRadius='8px' >Search</Button>
                            </ButtonGroup>
                        </GridItem>
                    </Grid>

                </GridItem>

            </Grid>
        </>
    );
}

export default FlightInfo;