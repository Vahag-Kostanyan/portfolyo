import { Box, Flex, Heading, Image, useColorModeValue, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import phpIcon from "../../imags/PHP-logo.svg.png";
import Skil from './Skil';
import php from "../../imags/PHP-logo.svg.png"
import laravel from "../../imags/laravel.png"
import MySQL from "../../imags/mysql.png"
import Jquery from "../../imags/jquery.png"
import html from "../../imags/html.png"
import css from "../../imags/css.png"
import JavaScript from "../../imags/javascript.png"
import react from "../../imags/react.png"
import chakraUI from "../../imags/chakraui.png"

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
        flex={2}
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        
        <Heading as="h1" > MY SKILLS </Heading>

      </Flex>
      <Flex
        flex={10}
        padding={isLargerThan1500 ? "20px 100px" : "50px 0"}
        justifyContent="center"
        gap={isLargerThan580 ? "150px" : "70px"}

        flexWrap="wrap"
      >
        <Skil skil = {php} skilName={"PHP"}/>
        <Skil skil = {laravel} skilName={"Laravel"}/>
        <Skil skil = {MySQL} skilName={"MySQL"}/>
        <Skil skil = {html} skilName={"HTML 5"}/>
        <Skil skil = {css} skilName={"CSS 3"}/>
        <Skil skil = {JavaScript} skilName={"JavaScript"}/>
        <Skil skil = {Jquery} skilName={"JQuery"}/>
        <Skil skil = {react} skilName={"React JS"}/>
        <Skil skil = {chakraUI} skilName={"Chakra UI"}/>
      </Flex>
    </Flex>
  )
}

export default SkilsContent