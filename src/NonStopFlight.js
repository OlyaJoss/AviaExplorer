import * as React from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import airlineCode from './airlineCode.json';
import {
    Grid,
    GridItem,
    Text,
    ButtonGroup,
    Button,
    IconButton,
    Flex,
    VisuallyHidden,
    Link
} from '@chakra-ui/react'


function NonStopFlight(props) {
    const { name = 'Unknown', price, time, link } = props;
    const airlineName = airlineCode.filter((el) => el.code === name)[0]?.name_translations.en
    return (
        <GridItem colStart={3} colEnd={-2}
            bgColor='#FFFFFF'
            color='#474A51'
            borderRadius='8px'
            h='74px'
            mb='8px'>
            <Grid
                templateColumns='98px 219px 295px 180px 188px'
                color='#474A51'
                fontWeight='600'
                justifyContent='center'
                alignItems='center'
                minHeight='74px'
            >
                {/* FIXME refactor duplicate tern */}
                <GridItem p={0}
                    ml='16px'>
                   
                    { name === ''
                    ? <Text> No picture </Text> 
                    :  <img src={`https://pics.avs.io/80/42/${name}.png`}
                    srcSet={`https://pics.avs.io/122/56/${name}@2x.png 2x`}
                    width='80'
                    height='42'
                    alt='Airline logo' />
                    }
                   </GridItem>
                   <GridItem>
                    { name === ''
                    ? <Text ml='16px'> Unknown airline </Text>
                    : <Text ml='16px'> {airlineName} </Text>
                    }
                   
                </GridItem>

                <GridItem alignItems='baseline'>
                    <Flex w='212px' alignItems='baseline'>
                        <Text pr='16px'> {time} </Text>
                        <VisuallyHidden><Button type='button' w='24px'>+3</Button></VisuallyHidden>
                    </Flex>
                </GridItem>
                <GridItem>
                    <Text> > {price} $ </Text>
                </GridItem>
                <GridItem>
                    <ButtonGroup>
                        <IconButton type='button'
                            aria-label='Show more info'
                            bgColor='#F2F2F2'
                            icon={<ChevronDownIcon color='#2D3748' />} />
                        <Link
                            href={link}
                            target='_blank'
                            color='#FFFFFF'
                            h='42px'
                            w='124px'
                            bgColor='#7B61FF'
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            borderRadius='8px'
                        > Book </Link>
                    </ButtonGroup>
                </GridItem>
            </Grid>
        </GridItem>
    );
}
export default NonStopFlight;