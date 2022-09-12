import * as React from 'react';
import NonStopFlight from './NonStopFlight';
import {
    Grid,
    GridItem,
    Text
} from '@chakra-ui/react';

const FlightRes = ({fromInfo}) => {
    if (!fromInfo) {
        return (<Text>Loading...</Text>);
    }
    if (fromInfo.lenght === 0) {
        return (<Text>No flights found</Text>);
    }
    return (
        // fromInfo.map((el) => (<NonStopFlight name={el.destination.name} operators={el.operators} />))

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
                <GridItem colStart={3} colEnd={-2}
                    rowStart={3} rowEnd={4}
                    bgColor='#FFFFFF'
                    color='#474A51'
                    borderRadius='8px'
                    h='74px'
                    mb='8px'>
                    
                    {fromInfo[0].operators.map((el) => (<NonStopFlight operators={el.name} key={el.destination.icao} /> ))}
                   
                </GridItem>

                {/* Empty grid item */}
                <GridItem colStart={2} colEnd={-1} minHeight='72px'
                    rowStart={4} rowEnd={5}>
                </GridItem>


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