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
    const [isFetchSend, setIsFetchSend] = useState(false);
    // в стейт записать три ячейки

    const API_URL = 'https://aviaexplorerserver.vercel.app';
    const API_LIMIT = 30;
    const API_UNIQUE = false;
    const API_CURR = 'usd';

    // Handler with fetch for Form
    const searchSubmitHandler = (e, fromAirport, toAirport, startDate) => {
        e.preventDefault();
        setIsFetchSend(true)
        fetch(`${API_URL}/${API_CURR}/${fromAirport}/${toAirport}/${startDate}/${API_UNIQUE}/${API_LIMIT}`)
            .then(response => response.json())
            .then(response => {
                setServerResponse(response)
                setIsFetchSend(false)
                // нафильтровать три массива
                // TODO https://trello.com/c/SxA4r81K/40-%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C-%D1%84%D0%B8%D0%BB%D1%8C%D1%82%D1%80-%D0%BF%D0%BE-transfers-012
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
                    <Form onSearch={searchSubmitHandler} isFetchSend={isFetchSend}/>

                </GridItem>
                <FlightRes serverResponse={serverResponse}/>



            </Grid>
        </>
    );
}

export default FlightInfo;