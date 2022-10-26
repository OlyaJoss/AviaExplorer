import * as React from 'react';
import NonStopFlight from './NonStopFlight';
import {
    Grid,
    GridItem,
    Text,
    Spinner
} from '@chakra-ui/react';

const FlightRes = ({ serverResponse, isFetchSend }) => {
    if (!serverResponse) {
        return (<GridItem colStart={3} colEnd={-2}
            rowStart={2} rowEnd={3}>
            {isFetchSend
                ? <Grid
                    templateColumns='1fr'
                    color='#474A51'
                    alignItems='center'
                    minHeight='74px'
                >
                    <GridItem>
                        <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='#7B61FF'
                            size='xl'
                        />
                    </GridItem>
                </Grid>
                : null
            }
        </GridItem>);
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

            {serverResponse.data.map((el) => (<NonStopFlight
                name={el.airline}
                key={el.link}
                price={el.price}
                time={new Date(el.departure_at).toUTCString().slice(0, 22)}
                link={el.link}
            />))}
        </>);
}

export default FlightRes;