import React from 'react'

import { Button, Flex, Box, Text, Heading, Spacer, HStack, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
export default function Navbar() {
  return (
    <Flex as="nav" p="10px" alignItems="center" borderBottomWidth="1px" borderBottomColor="gray.100" position={'fixed'} backgroundColor={'white'} >
    <Heading>Niranjan's Super Folio</Heading>
    <Spacer></Spacer>
    <HStack spacing="15px">
      <Box borderWidth="1px" p="5px" color="gray.300" _hover={{ bg: "teal.300" }}>
        <Link href=''  >
          About 
        </Link>
      </Box>
      <Box borderWidth="1px" p="5px" color="gray.300" _hover={{ bg: "teal.300" }}>
        <Link href='https://chakra-ui.com' isExternal>
          Skills 
        </Link>
      </Box>
      <Box borderWidth="1px" p="5px" color="gray.300" _hover={{ bg: "teal.300" }}>
        <Link href='https://chakra-ui.com' isExternal>
          Portfolio 
        </Link>
      </Box>
      <Box borderWidth="1px" p="5px" color="gray.300" _hover={{ bg: "teal.300" }}>
        <Link href='https://chakra-ui.com' isExternal>
          Experience 
        </Link>
      </Box>
      <Box borderWidth="1px" p="5px" color="gray.300" _hover={{ bg: "teal.300" }}>
        <Link href='https://chakra-ui.com' isExternal>
          Contact <ExternalLinkIcon mx='2px' />
        </Link>
      </Box>
    </HStack>
  </Flex>
  
  )
}
