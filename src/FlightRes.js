import * as React from 'react';
import NonStopFlight from './NonStopFlight';
import {
    Grid,
    GridItem,
    Text
} from '@chakra-ui/react';

const FlightRes = ({ serverResponse }) => {
    if (!serverResponse) {
        return (<Text>Loading...</Text>);
    }
    if (serverResponse.lenght === 0) {
        return (<Text>No flights found</Text>);
    }
    return (
        <>
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

            {serverResponse.data.map((el) => (<NonStopFlight name={el.airline} key={el.link} price={el.price}/>))}



            {/* Empty grid item */}
            {/* <GridItem colStart={2} colEnd={-1} minHeight='72px'
                    rowStart={4} rowEnd={5}>
                </GridItem> */}


            {/* 1 stop flight info
                <GridItem colStart={3} colEnd={-2}
                    bgColor='#FFFFFF'
                    color='#474A51'
                    borderRadius='8px'
                    h='74px'>
                    {/* <OneStopFlight />
                    </GridItem>  */}


            {/* Side
                <GridItem rowStart={5} rowEnd={6}
                    colStart={2} colEnd={-3}>
                    <Text color='#474A51' pt={6} pr={0}>1 stop</Text>
                </GridItem> */}

        </>);
}

export default FlightRes;