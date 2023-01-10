import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import phpIcon from "../../imags/PHP-logo.svg.png";
import Chart from './Chart'
import SkilsSkil2 from './SkilsSkil2'
const SkilsContent = () => {
  return (
    <Flex
      flexDirection="column"
      overflowY="scroll"
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
        <Heading as="h1" > MY SKILLS </Heading>

      </Flex>
      <Flex
        flex={9}
        padding="50px 250px"
        gap="150px"
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