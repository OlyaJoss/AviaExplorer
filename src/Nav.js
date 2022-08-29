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
      <Flex as='header' w='full' px={90} pb={148} alignItems='center'>
        <Box>
          <Text >AviaExplorer</Text>
        </Box>
        <Spacer />

        <Button as='a' type='button' border='none' bgColor='transparent'>Profile</Button>
        <Select w='110px' border='none' bgColor='transparent' placeholder='English'></Select>

      </Flex>

      <HStack maxWidth='986' pb='80px'>
        <Heading
          fontFamily='Nunito'
          color='#7B61FF'
          as='h1'
          fontSize='60px'
          lineHeight='70px'
          pb='5px'
          textAlign='center'
          noOfLines={2}>
          Travel the world and buy <br />
          direct from the fly companies
          </Heading>
      </HStack>
    </>
  );
}

export default Nav;