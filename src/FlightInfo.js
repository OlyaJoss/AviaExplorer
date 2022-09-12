import * as React from 'react';
import { useState } from 'react';
import Form from './Form';
import FlightRes from './FlightRes';
// import OneStopFlight from './OneStopFlight';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';
import {
    Grid,
    GridItem
} from '@chakra-ui/react';


function FlightInfo() {

 const [fromInfo, setFromInfo] = useState(null);
 
 
    const AERO_DATA = 'https://aerodatabox.p.rapidapi.com/airports/icao/';
    // {EHAM/stats/routes/daily/}
  
      // Handler with fetch for Form
      const searchSubmitHandler = (e, fromAirport, toAirport) => {
        e.preventDefault();
        // console.log(`Hello ${fromAirport}`)
        // console.log(fromAirport, startDate, toAirport,fromInfo)
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a8154b1356mshac98bb79d3b0cacp13166fjsn0586619865ba',
                'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
            }
        };

        fetch(`${AERO_DATA}${fromAirport}/stats/routes/daily/`, options)
            .then(response => response.json())
            .then(response => {
                // setFromInfo(response.routes)
                setFromInfo(response.routes.filter((el)=> el.destination.icao === toAirport))
            
            
            console.log(fromInfo)
            }
            )
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
                    <Form onSearch={searchSubmitHandler}/>

                </GridItem>
                <FlightRes fromInfo={fromInfo}/>


               
            </Grid>
        </>
    );
}

export default FlightInfo;