import * as React from 'react';
import { useState } from 'react';
// import Form from './Form';
import NonStopFlight from './NonStopFlight';
import OneStopFlight from './OneStopFlight';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';
import {
    Grid,
    GridItem,
    Text,
    Flex,
    FormControl,
    FormLabel,
    Input,
    IconButton,
    Button,
    Box
} from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';

function FlightInfo() {

    const [startDate, setStartDate] = useState(new Date());
    const [fromAirport, setFromAirport] = useState('');
    const [toAirport, setToAirport] = useState('');
    const AERO_DATA = 'https://aerodatabox.p.rapidapi.com/airports/icao/';
    // {EHAM/stats/routes/daily/}
    // Handler with fetch for Form
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        console.log(fromAirport, startDate, toAirport)
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a8154b1356mshac98bb79d3b0cacp13166fjsn0586619865ba',
                'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
            }
        };

        fetch(`${AERO_DATA}${fromAirport}/stats/routes/daily/`, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    return (
        <>
            {/* Main grid container */}
            <Grid templateRows='repeat(1, 1fr)'
                templateColumns='1fr 80px 996px 1fr'
                w='full'
            >
                {/* Grid with Form */}
                <GridItem colStart={3} colEnd={-2}>
                {/* Form */}
                    <Flex as='form' onSubmit={searchSubmitHandler}
                        alignItems='flex-end' justify='space-between' flexDirection='row' pb='80px' w='986px'>
                        <FormControl w='282px'>
                            <FormLabel color='#474A51'>
                                From
                    </FormLabel>
                            <Input
                                value={fromAirport}
                                onChange={(event) => setFromAirport(event.target.value)}
                                placeholder='Airport, City or Country'
                                _placeholder={{ fontWeight: 500 }}
                                w='282px' h='64px'
                                bgColor='#FFFFFF'
                                color='#1F2229'
                                fontWeight='700'
                                borderColor='#D8D8D8' />
                        </FormControl>

                        <IconButton aria-label='Replace cities'
                            size='xs'
                            mb={5}
                            variant='outline'
                            bgColor='#FFFFFF'
                            isRound
                            icon={<RepeatIcon color='#7B61FF' />} />

                        <FormControl w='282px'>
                            <FormLabel color='#474A51'>
                                To
                    </FormLabel>
                            <Input
                                value={toAirport}
                                onChange={(event) => setToAirport(event.target.value)}
                                placeholder='Airport, City or Country'
                                _placeholder={{ fontWeight: 500 }}
                                h='64px' w='282px'
                                bgColor='#FFFFFF'
                                color='#1F2229'
                                fontWeight='700'
                                borderColor='#D8D8D8' />
                        </FormControl>

                        <Box>
                            <DatePicker className='date-picker' dateFormat='dd/MM/yyyy' selected={startDate} onChange={(date) => setStartDate(date)} />
                        </Box>
                        <Button type='submit' color='#FFFFFF' h='64px' w='151px' bgColor='#7B61FF' borderRadius='8px' >Search</Button>

                    </Flex>

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
                    <Text color='#474A51' pt={6} pr={0}> Non-stop </Text>
                </GridItem>

                {/* Flight info */}
                <GridItem colStart={3} colEnd={-2}
                    rowStart={3} rowEnd={4}
                    bgColor='#FFFFFF'
                    color='#474A51'
                    borderRadius='8px'
                    h='74px'
                    mb='8px'>
                    <NonStopFlight />
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
                    <OneStopFlight />
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