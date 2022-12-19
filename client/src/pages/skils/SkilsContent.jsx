import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import myPhoto from "../../imags/myPhoto.png"
import Chart from './Chart'
const SkilsContent = () => {
  return (
    <Flex 
    gap="50px"
    flexWrap="wrap"
    alignItems="center"
    justifyContent="center"
    height="90vh"
    >
    
    <Flex
      flex="2"
      alignItems="center"
      justify="center"
      fontSize="24px"
    >
      MY SKILLS
    </Flex>
    
    <Flex 
      fontSize="10px"
      
    >


      <Chart/>


    </Flex>

  </Flex>
  )
}

export default SkilsContent