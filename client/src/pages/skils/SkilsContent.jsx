import { Box, Flex, Heading, Image, useColorModeValue, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import phpIcon from "../../imags/PHP-logo.svg.png";
import Chart from './Chart'
import SkilsSkil2 from './SkilsSkil2'
const SkilsContent = () => {
  const [isLargerThan1500] = useMediaQuery('(min-width: 1500px)')
  const [isLargerThan580] = useMediaQuery('(min-width: 580px)')
  
  const color = useColorModeValue('white', 'gray.500')

  return (
    <Flex
      flexDirection="column"
      overflowY="auto"
      padding="50px"
      height="92vh"
      gap="30px"
    >
      <Flex
        flex={3}
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        
        <Heading as="h1"color={color} > MY SKILLS </Heading>

      </Flex>
      <Flex
        flex={9}
        padding={isLargerThan1500 ? "50px 250px" : "50px 0"}
        justifyContent={isLargerThan1500 ? "flex-start" : "center"}
        gap={isLargerThan580 ? "150px" : "70px"}
        flexWrap="wrap"
      >
        <SkilsSkil2 value={60} img={phpIcon} />
        <SkilsSkil2 value={60} />
        <SkilsSkil2 value={60} />
        <SkilsSkil2 value={60} />
        <SkilsSkil2 value={60} />
        <SkilsSkil2 value={60} />
        <SkilsSkil2 value={60} />
        <SkilsSkil2 value={60} />
        
      </Flex>
    </Flex>
  )
}

export default SkilsContent