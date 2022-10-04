import * as React from 'react';
import { useState } from 'react';
import Form from './Form';
import FlightRes from './FlightRes';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';
import {
    Grid,
    GridItem
} from '@chakra-ui/react';


function FlightInfo() {

 const [serverResponse, setServerResponse] = useState(null);
 
 
    const API_URL = 'http://localhost:8080/';
    const API_LIMIT = 30;
    const API_UNIQUE = true;
    const API_CURR = 'usd';
   
      // Handler with fetch for Form
      const searchSubmitHandler = (e, fromAirport, toAirport, startDate) => {
        e.preventDefault();

        fetch(`${API_URL}${API_CURR}/${fromAirport}/${toAirport}/${startDate}/${API_UNIQUE}/${API_LIMIT}`)
            .then(response => response.json())
            .then(response => {
                setServerResponse(response)
          console.log(response)
            // console.log(`${API_URL}${API_CURR}/${fromAirport}/${toAirport}/${startDate}/${API_UNIQUE}/${API_LIMIT}`)
            })
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
                <FlightRes serverResponse={serverResponse}/>


               
            </Grid>
        </>
    );
}

export default FlightInfo;