import * as React from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Grid,
    GridItem,
    Text,
    ButtonGroup,
    Button,
    IconButton,
    Flex
} from '@chakra-ui/react'


function OneStopFlight() {
    return (
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
    );
}
export default OneStopFlight;