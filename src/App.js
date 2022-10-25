
import Nav from './Nav';

import FlightInfo from './FlightInfo';
import * as React from 'react';
import { 
  Container,
  VStack,
} from '@chakra-ui/react'

function App() {
  return (
    <>
    <Container maxW='container.xl' p={0} bg='#F5F5F5' fontFamily='Nunito' alignItems='center'>
        <VStack w='full' h='100vh' m={0} color='#7B61FF' py={51}>
        <Nav />
        
        <FlightInfo />
        </VStack>
    </Container>
      
    </>
  );
}

export default App;
