import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import myPhoto from "../../imags/myPhoto.png"
import Chart from './Chart'
import SkilsSkil2 from './SkilsSkil2'
const SkilsContent = () => {
  return (
    <Flex 
    gap="50px"
    flexWrap="wrap"
    alignItems="center"
    justifyContent="center"
    // height="90vh"
    minHeight="90vh"
    flexDirection="column"
    >
    
    <Flex
      flex={3}
      alignItems="center"
      justify="center"
      fontSize="24px"
    >
      MY SKILLS
    </Flex>
    
    <Flex 
      fontSize="10px"
      flex={9}
    >


      <SkilsSkil2/>


    </Flex>

  </Flex>
  )
}

export default SkilsContent