import * as React from 'react';
import { 
    Heading, 
    HStack,
    Flex,
    Text,
    Button,
    Box,
    Spacer,
    Select
  } from '@chakra-ui/react'
function Nav() {
    return (
      <>
        <Flex minWidth='max-content' px={90} pb={148} alignItems='center'>
          
          <Text >AviaExplorer</Text>
        
          <Spacer />
          
          <Button type='button' border='none' bgColor='transparent'>Profile</Button>
          <Select type='button' w='110px' border='none' bgColor='transparent' placeholder='English'></Select>
          
          </Flex>

          <HStack maxWidth='986' pb='80px'>
          <Heading fontFamily='Nunito' color='#7B61FF' as='h1' size='4xl' textAlign='center' noOfLines={2}>Travel the world and buy <br/>
          direct from the fly companies</Heading>
          </HStack>
      </>
    );
  }
  
  export default Nav;