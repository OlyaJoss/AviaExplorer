import * as React from 'react';
import {
    Button, Grid, GridItem
} from '@chakra-ui/react';


function Schedule() {
    return (
        <>
        <Grid templateColumns='repeat(5, 1fr)' gap={4}>
        <GridItem rowSpan={1} colSpan={1}>
            <Text>Non-stop</Text>
        </GridItem>

        </Grid>
        </>
    )
}

export default Schedule;