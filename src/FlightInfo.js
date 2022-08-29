import * as React from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import Form from './Form';

import {
    Grid,
    GridItem,
    Text,
    ButtonGroup,
    Button,
    IconButton,
    Flex,
    VisuallyHidden
} from '@chakra-ui/react'

function FlightInfo() {
    return (
        <>
            {/* Main grid container */}
            <Grid templateRows='repeat(2, 1fr)'
                templateColumns='1fr 80px 996px 1fr'
                w='full' 
            >
                <GridItem colStart={3} colEnd={-2}>
                <Form />
                </GridItem>
                {/* Header */}
                <GridItem colStart={3} colEnd={-2}
                rowStart={2} rowEnd={3}>
                    <Grid
                        templateColumns='333px 295px 180px 188px'
                        color='#474A51'
                        alignItems='center'
                        minHeight='74px'
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
                <GridItem rowStart={3} rowEnd={4} 
                colStart={2} colEnd={-3}>
                    <Text color='#474A51' pt={6} pr={0}>Non-stop</Text>
                </GridItem>

                {/* Flight info */}
                <GridItem colStart={3} colEnd={-2}
                    bgColor='#FFFFFF'
                    color='#474A51'
                    borderRadius='8px'
                    h='74px'
                    mb='8px'>
                    <Grid 
                        templateColumns='333px 295px 180px 188px'
                        color='#474A51'
                        fontWeight='600'
                        justifyContent='center'
                        alignItems='center'
                        minHeight='74px'
                    >
                        <GridItem>
                            <Text>El-Al Israel Airlines</Text>
                        </GridItem>
                        <GridItem alignItems='baseline'>
                            <Flex w='212px' alignItems='baseline'>
                                <Text pr='16px'>14:20; 20:45</Text>
                                <VisuallyHidden><Button type='button' w='24px'>+3</Button></VisuallyHidden>
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
                                    icon={<ChevronDownIcon color='#2D3748' />} />
                                <Button type='button' color='#FFFFFF' h='42px' w='124px' bgColor='#7B61FF' borderRadius='8px' >Search</Button>
                            </ButtonGroup>
                        </GridItem>
                    </Grid>
                </GridItem>

                {/* Empty grid item */}
                <GridItem colStart={2} colEnd={-1} minHeight='72px'
                rowStart={4} rowEnd={5}>
                </GridItem>
                

                {/* 1 stop flight info */}
                <GridItem colStart={3} colEnd={-2}
                    bgColor='#FFFFFF'
                    color='#474A51'
                    borderRadius='8px'
                    h='74px'>
                    <Grid 
                        templateColumns='333px 295px 180px 188px'
                        color='#474A51'
                        fontWeight='600'
                        justifyContent='center'
                        alignItems='center'
                        minHeight='74px'
                    >
                        <GridItem>
                            <Text>Lufthansa</Text>
                        </GridItem>
                        <GridItem alignItems='baseline'>
                            <Flex w='212px' alignItems='baseline'>
                                <Text pr='16px'>08:15; 15:35; 17:20</Text>
                               <Button type='button' w='24px'>+3</Button>
                            </Flex>
                        </GridItem>
                        <GridItem>
                            <Text>> $619</Text>
                        </GridItem>
                        <GridItem>
                            <ButtonGroup>
                                <IconButton type='button'
                                    aria-label='Show more info'
                                    bgColor='#F2F2F2'
                                    icon={<ChevronDownIcon color='#2D3748' />} />
                                <Button type='button' color='#FFFFFF' h='42px' w='124px' bgColor='#7B61FF' borderRadius='8px' >Search</Button>
                            </ButtonGroup>
                        </GridItem>
                    </Grid>
                </GridItem>

                {/* Side */}
                <GridItem rowStart={5} rowEnd={6} 
                colStart={2} colEnd={-3}>
                    <Text color='#474A51' pt={6} pr={0}>1 stop</Text>
                </GridItem>
            </Grid>
        </>
    );
}

export default FlightInfo;